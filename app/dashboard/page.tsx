'use client'

import { MyDayDashboard } from '@/components/dashboard/MyDayDashboard'
import { HotLeadsList } from '@/components/dashboard/HotLeadsList'
import { PerformanceSnapshot } from '@/components/dashboard/PerformanceSnapshot'
import { AIActivityFeed } from '@/components/dashboard/AIActivityFeed'
import { FocusTime } from '@/components/dashboard/FocusTime'

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header with Key Metrics */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Day</h1>
        <p className="mt-2 text-sm text-gray-600">
          AI is working on 47 tasks in the background • 3 actions need your attention
        </p>
      </div>

      {/* Hero Metrics */}
      <PerformanceSnapshot />

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Focus Time & Hot Leads */}
        <div className="lg:col-span-2 space-y-6">
          <FocusTime />
          <HotLeadsList />
        </div>

        {/* Right Column - AI Activity */}
        <div className="space-y-6">
          <AIActivityFeed />
        </div>
      </div>
    </div>
  )
}