'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bot, Search, Mail, Brain, Target, Sparkles } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

const activities = [
  {
    id: '1',
    type: 'research',
    icon: Search,
    title: 'Researching DataTech Solutions',
    description: 'Found 3 trigger events and 2 pain points',
    time: 'Just now',
    confidence: 95,
  },
  {
    id: '2',
    type: 'personalization',
    icon: Sparkles,
    title: 'Generated sequence for Urban Properties',
    description: '5-step sequence with competitive positioning',
    time: '2 min ago',
    confidence: 88,
  },
  {
    id: '3',
    type: 'prediction',
    icon: Brain,
    title: 'Identified 3 new hot leads',
    description: 'Based on engagement patterns and intent signals',
    time: '5 min ago',
    confidence: 91,
  },
  {
    id: '4',
    type: 'optimization',
    icon: Target,
    title: 'Optimized Tech Startup sequence',
    description: 'Improved subject lines based on 15% open rate',
    time: '10 min ago',
    confidence: 87,
  },
  {
    id: '5',
    type: 'email',
    icon: Mail,
    title: 'Sent follow-up to 12 prospects',
    description: 'Personalized based on recent activity',
    time: '15 min ago',
    confidence: 100,
  },
]

const typeColors = {
  research: 'bg-blue-100 text-blue-800',
  personalization: 'bg-purple-100 text-purple-800',
  prediction: 'bg-green-100 text-green-800',
  optimization: 'bg-orange-100 text-orange-800',
  email: 'bg-gray-100 text-gray-800',
}

export function AIActivityFeed() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-medium">AI Activity</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-lg ${typeColors[activity.type as keyof typeof typeColors]}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <Badge variant="outline" className="text-xs">
                        {activity.confidence}%
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{activity.description}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
        <div className="mt-4 pt-4 border-t text-center">
          <p className="text-xs text-gray-500">
            AI has completed 247 tasks today
          </p>
        </div>
      </CardContent>
    </Card>
  )
}