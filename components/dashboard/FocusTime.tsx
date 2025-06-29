'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Phone, Mail, MessageSquare } from 'lucide-react'

const upcomingActions = [
  {
    time: '10:00 AM',
    action: 'Call Sarah Johnson at Acme Corp',
    type: 'call',
    icon: Phone,
    aiNote: 'Best time based on email opens',
    confidence: 92,
  },
  {
    time: '10:30 AM',
    action: 'Follow up with Tech Innovators',
    type: 'email',
    icon: Mail,
    aiNote: 'Opened pricing email 3 times',
    confidence: 88,
  },
  {
    time: '11:00 AM',
    action: 'LinkedIn message to CTO at DataCo',
    type: 'linkedin',
    icon: MessageSquare,
    aiNote: 'Viewed your profile yesterday',
    confidence: 85,
  },
]

export function FocusTime() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Focus Time: Next 2 Hours</CardTitle>
          <Clock className="h-5 w-5 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingActions.map((action, index) => {
            const Icon = action.icon
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {action.time} - {action.action}
                    </p>
                    <span className="text-xs text-gray-500">{action.confidence}% confidence</span>
                  </div>
                  <p className="text-xs text-gray-500">AI: {action.aiNote}</p>
                  <div className="flex space-x-2 pt-1">
                    <Button size="sm" variant="default">
                      Start Now
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm" variant="ghost">
                      Skip
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}