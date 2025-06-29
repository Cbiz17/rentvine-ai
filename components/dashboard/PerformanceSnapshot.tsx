'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Calendar, Users, Target } from 'lucide-react'

const metrics = [
  {
    name: 'Quota Progress',
    value: '73%',
    change: '+12%',
    changeType: 'positive',
    icon: Target,
    description: 'vs last month',
  },
  {
    name: 'Meetings Booked',
    value: '24',
    change: '+8',
    changeType: 'positive',
    icon: Calendar,
    description: 'this month',
  },
  {
    name: 'Active Prospects',
    value: '142',
    change: '+23',
    changeType: 'positive',
    icon: Users,
    description: 'in sequences',
  },
  {
    name: 'Team Rank',
    value: '#3',
    change: '↑2',
    changeType: 'positive',
    icon: TrendingUp,
    description: 'out of 15 SDRs',
  },
]

export function PerformanceSnapshot() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                  <div className="mt-2 flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                    <span
                      className={`ml-2 text-sm font-medium ${
                        metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{metric.description}</p>
                </div>
                <Icon className="h-8 w-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}