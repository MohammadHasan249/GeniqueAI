"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Plus, Search, Globe, Eye, Edit3, Calendar, TrendingUp, Users, Zap, MoreVertical, ExternalLink } from 'lucide-react';
import { NumberTicker } from '@/components/number-ticker';
import { WebsitePreview, ProjectMeta } from '@/components/website-preview';
import type { GeneratedSpec } from '@/schemas/generated-spec';

interface Page {
  id: string;
  status: string;
  prodUrl?: string | null;
  previewUrl?: string | null;
  createdAt: Date;
  updatedAt?: Date;
  businessName?: string | null;
  answersJson: any;
  generatedJson?: GeneratedSpec | null;
}

interface DashboardClientProps {
  pages: Page[];
}

export default function DashboardClient({ pages }: DashboardClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter pages based on search query
  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return pages;
    
    const query = searchQuery.toLowerCase();
    return pages.filter(page => {
      const businessName = (page as any).businessName || page.answersJson?.product || '';
      const audience = page.answersJson?.audience || '';
      const status = page.status || '';
      
      return (
        businessName.toLowerCase().includes(query) ||
        audience.toLowerCase().includes(query) ||
        status.toLowerCase().includes(query)
      );
    });
  }, [pages, searchQuery]);

  // Calculate stats based on filtered results
  const totalPages = pages.length;
  const filteredTotal = filteredPages.length;
  const livePages = pages.filter(p => p.status === 'live').length;
  const draftPages = pages.filter(p => p.status === 'draft').length;
  const recentPages = filteredPages.slice(0, 3);

  // Get this week's pages
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const thisWeekPages = pages.filter(p => p.createdAt >= oneWeekAgo).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome back!
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Let's create something amazing today ✨
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search landing pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              )}
            </div>
            <Link 
              href="/dashboard/create-website"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Landing Page
            </Link>
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {filteredTotal === 0 
                ? `No landing pages found for "${searchQuery}"`
                : `Found ${filteredTotal} landing page${filteredTotal === 1 ? '' : 's'} matching "${searchQuery}"`
              }
            </p>
          </div>
        )}

        {/* Quick Actions & Welcome */}
        {totalPages === 0 && (
          <div className="p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to build your first landing page?</h3>
              <p className="text-muted-foreground mb-6">
                It takes less than 2 minutes to create a stunning landing page with our AI-powered platform.
              </p>
              <Link 
                href="/dashboard/create-website"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Your First Landing Page
              </Link>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        {totalPages > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Landing Pages</p>
                  <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                    <NumberTicker value={totalPages} />
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">Live Sites</p>
                  <div className="text-3xl font-bold text-green-900 dark:text-green-100">
                    <NumberTicker value={livePages} />
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 border border-orange-200 dark:border-orange-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Draft Pages</p>
                  <div className="text-3xl font-bold text-orange-900 dark:text-orange-100">
                    <NumberTicker value={draftPages} />
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Edit3 className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border border-purple-200 dark:border-purple-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">This Week</p>
                  <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                    <NumberTicker value={thisWeekPages} />
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        {totalPages > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 cursor-pointer border border-border rounded-lg bg-card">
              <Link href="/dashboard/create-website" className="block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Create New Landing Page</h3>
                    <p className="text-muted-foreground text-sm">Start building with AI assistance</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="p-6 cursor-pointer border border-border rounded-lg bg-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Browse Templates</h3>
                  <p className="text-muted-foreground text-sm">Explore pre-made designs</p>
                </div>
              </div>
            </div>

            <div className="p-6 cursor-pointer border border-border rounded-lg bg-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">View Analytics</h3>
                  <p className="text-muted-foreground text-sm">Track your site performance</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Landing Pages Grid */}
        {totalPages > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {searchQuery ? 'Search Results' : 'Your Landing Pages'}
                </h2>
                <p className="text-muted-foreground">
                  {searchQuery 
                    ? `${filteredTotal} landing page${filteredTotal === 1 ? '' : 's'} found`
                    : 'Manage and edit your created landing pages'
                  }
                </p>
              </div>
            </div>

            {filteredTotal === 0 && searchQuery ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium text-muted-foreground mb-2">No landing pages found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or create a new landing page
                </p>
                <Link 
                  href="/dashboard/create-website"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Create Landing Page
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPages.map(p => (
                  <Link 
                    key={p.id} 
                    href={`/dashboard/pages/${p.id}`}
                    className="group block border border-border rounded-lg bg-card hover:shadow-lg transition-all duration-200 hover:border-primary/50"
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                            {(p as any).businessName || (p.answersJson as any).product || 'Untitled Landing Page'}
                          </h3>
                          <p className="text-sm text-muted-foreground truncate">
                            {(p.answersJson as any).audience || 'General audience'}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {p.status === 'live' && p.prodUrl ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                              Live
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400 capitalize">
                              {p.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Website Preview */}
                      <div className="mb-4">
                        <WebsitePreview 
                          spec={p.generatedJson}
                          businessName={p.businessName}
                          answersJson={p.answersJson}
                          className="h-32 transition-transform group-hover:scale-[1.02]"
                        />
                      </div>

                      {/* Project Metadata */}
                      <div className="mb-4">
                        <ProjectMeta 
                          answersJson={p.answersJson}
                          spec={p.generatedJson}
                        />
                      </div>

                      {/* Footer with date and actions */}
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(p.createdAt).toLocaleDateString()}
                          {p.updatedAt && p.updatedAt.getTime() !== p.createdAt.getTime() && (
                            <span className="text-muted-foreground/70">• Updated {new Date(p.updatedAt).toLocaleDateString()}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors opacity-0 group-hover:opacity-100">
                            <Edit3 className="w-3 h-3" />
                            Edit
                          </div>
                          {p.status === 'live' && p.prodUrl && (
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (p.prodUrl) {
                                  window.open(p.prodUrl, '_blank', 'noopener,noreferrer');
                                }
                              }}
                              className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-1 transition-colors opacity-0 group-hover:opacity-100"
                            >
                              <ExternalLink className="w-3 h-3" />
                              View Live
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Recent Activity */}
        {recentPages.length > 0 && !searchQuery && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            <div className="space-y-3">
              {recentPages.map(p => (
                <Link 
                  key={p.id} 
                  href={`/dashboard/pages/${p.id}`}
                  className="block p-4 border border-border rounded-lg bg-card hover:shadow-lg transition-all duration-200 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {(p as any).businessName || (p.answersJson as any).product || 'Untitled Landing Page'}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Created {new Date(p.createdAt).toLocaleDateString()}
                          {p.updatedAt && p.updatedAt.getTime() !== p.createdAt.getTime() && (
                            <span> • Updated {new Date(p.updatedAt).toLocaleDateString()}</span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-primary hover:text-primary/80 text-sm font-medium">
                      View →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 