"use client";

import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LogoUploadProps {
  onLogoUploaded: (url: string) => void;
  currentLogoUrl?: string;
  className?: string;
}

export function LogoUpload({ 
  onLogoUploaded, 
  currentLogoUrl, 
  className
}: LogoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentLogoUrl || null);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      return 'Please upload an image file';
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return 'File size must be less than 5MB';
    }

    // Check image dimensions
    return new Promise<string | null>((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (img.width < 100 || img.height < 100) {
          resolve('Image must be at least 100x100 pixels');
        } else if (img.width > 2000 || img.height > 2000) {
          resolve('Image must be smaller than 2000x2000 pixels');
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve('Invalid image file');
      img.src = URL.createObjectURL(file);
    }) as any;
  };

  const uploadToSupabase = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/upload-logo', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Upload failed');
    }

    const { url } = await response.json();
    return url;
  };

  const handleFileUpload = useCallback(async (file: File) => {
    setError(null);
    setIsUploading(true);

    try {
      // Validate file
      const validationError = await validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      // Create preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      // Upload to Supabase
      const uploadedUrl = await uploadToSupabase(file);
      
      // Clean up object URL
      URL.revokeObjectURL(objectUrl);
      
      // Set final URL
      setPreviewUrl(uploadedUrl);
      onLogoUploaded(uploadedUrl);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      setPreviewUrl(null);
    } finally {
      setIsUploading(false);
    }
  }, [onLogoUploaded]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, [handleFileUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, [handleFileUpload]);

  const removeLogo = () => {
    setPreviewUrl(null);
    setError(null);
    onLogoUploaded('');
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Business Logo <span className="text-gray-500">(Optional)</span>
        </label>
        <p className="text-sm text-gray-600">
          Upload your logo to personalize your landing page. If you don't upload a logo, we'll automatically generate one with your business name and a matching icon.
        </p>
      </div>

      {previewUrl ? (
        /* Logo Preview */
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={previewUrl}
            alt="Logo preview"
            className="w-full h-full object-contain rounded-lg border-2 border-gray-200 bg-white p-2"
          />
          <Button
            type="button"
            size="icon"
            variant="destructive"
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
            onClick={removeLogo}
            disabled={isUploading}
          >
            <X className="w-3 h-3" />
          </Button>
          {isUploading && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-white animate-spin" />
            </div>
          )}
        </div>
      ) : (
        /* Upload Area */
        <div
          className={cn(
            "relative border-2 border-dashed rounded-lg p-8 text-center transition-colors",
            isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400",
            isUploading && "pointer-events-none opacity-50"
          )}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />
          
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 text-gray-400">
              {isUploading ? (
                <Loader2 className="w-full h-full animate-spin" />
              ) : (
                <ImageIcon className="w-full h-full" />
              )}
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900">
                {isUploading ? 'Uploading...' : 'Drop your logo here'}
              </p>
              <p className="text-sm text-gray-600">
                or{' '}
                <span className="font-medium text-blue-600 hover:text-blue-500">
                  browse files
                </span>
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <Button type="button" variant="outline" disabled={isUploading}>
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </Button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
