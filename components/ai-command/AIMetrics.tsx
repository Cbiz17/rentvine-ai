'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, AlertCircle, Zap } from 'lucide-react'

const metrics = [
  {
    label: 'Success Rate',
    value: 94,
    change: '+2.3%',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    label: 'Tasks Automated',
    value: 87,
    change: '+5.1%',
    icon: Zap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    label: 'Accuracy Score',
    value: 96,
    change: '+1.2%',
    icon: CheckCircle,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    label: 'Interventions',
    value: 3,
    change: '-2',
    icon: AlertCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    inverse: true,
  },
]

export function AIMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`h-5 w-5 ${metric.color}`} />
                </div>
                <span className={`text-sm font-medium ${
                  metric.inverse ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">{metric.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold">
                  {metric.inverse ? metric.value : `${metric.value}%`}
                </p>
                {!metric.inverse && (
                  <Progress value={metric.value} className="w-20 h-2" />
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}