'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Search, 
  Mail, 
  Brain, 
  Target, 
  Sparkles,
  CheckCircle,
  AlertCircle,
  Clock,
  Eye,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'

const activities = [
  {
    id: '1',
    type: 'research',
    icon: Search,
    title: 'Deep research on TechCorp Industries',
    details: {
      what: 'Analyzed 15 data sources including LinkedIn, news, and tech stack',
      why: 'New lead matching ICP criteria (score: 89/100)',
      confidence: 95,
      duration: '2.3 seconds',
      sources: ['LinkedIn Sales Navigator', 'Crunchbase', 'Company Website', 'Google News'],
    },
    timestamp: '2 minutes ago',
    status: 'completed',
    canOverride: false,
  },
  {
    id: '2',
    type: 'personalization',
    icon: Sparkles,
    title: 'Generated personalized sequence',
    details: {
      what: 'Created 5-step email sequence with industry-specific messaging',
      why: 'Similar companies had 34% higher response with this approach',
      confidence: 88,
      duration: '1.7 seconds',
      variables: ['Industry pain points', 'Recent funding', 'Competitor switch'],
    },
    timestamp: '5 minutes ago',
    status: 'completed',
    canOverride: true,
  },
  {
    id: '3',
    type: 'decision',
    icon: Brain,
    title: 'Postponed outreach to DataSystems',
    details: {
      what: 'Delayed sequence start by 3 days',
      why: 'CEO on vacation (LinkedIn activity), better engagement expected next week',
      confidence: 91,
      duration: '0.8 seconds',
      factors: ['Executive availability', 'Historical open rates', 'Day of week analysis'],
    },
    timestamp: '8 minutes ago',
    status: 'pending',
    canOverride: true,
  },
  {
    id: '4',
    type: 'alert',
    icon: AlertCircle,
    title: 'Low confidence on CloudTech personalization',
    details: {
      what: 'Unable to find sufficient personalization data',
      why: 'Limited public information, no recent activity signals',
      confidence: 42,
      duration: '3.1 seconds',
      recommendation: 'Manual review recommended before outreach',
    },
    timestamp: '12 minutes ago',
    status: 'needs_review',
    canOverride: true,
  },
]

const typeStyles = {
  research: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
  personalization: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200' },
  decision: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
  alert: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200' },
}

const statusIcons = {
  completed: CheckCircle,
  pending: Clock,
  needs_review: AlertCircle,
}

export function AIActivityLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time AI Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon
              const StatusIcon = statusIcons[activity.status as keyof typeof statusIcons]
              const style = typeStyles[activity.type as keyof typeof typeStyles]

              return (
                <div key={activity.id} className={`border rounded-lg p-4 ${style.border}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${style.bg}`}>
                        <Icon className={`h-4 w-4 ${style.text}`} />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StatusIcon className="h-4 w-4 text-gray-400" />
                      <Badge variant="outline" className="text-xs">
                        {activity.details.confidence}% confidence
                      </Badge>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                    <div>
                      <p className="text-xs font-medium text-gray-600">What AI did:</p>
                      <p className="text-xs text-gray-700">{activity.details.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600">Why it did it:</p>
                      <p className="text-xs text-gray-700">{activity.details.why}</p>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-gray-500">
                        Completed in {activity.details.duration}
                      </span>
                      {activity.canOverride && (
                        <Button size="sm" variant="ghost" className="h-7 text-xs">
                          Override
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <ThumbsUp className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <ThumbsDown className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-400">Did this work?</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}