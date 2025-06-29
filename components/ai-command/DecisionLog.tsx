'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Brain, TrendingUp, TrendingDown, Minus } from 'lucide-react'

const decisions = [
  {
    id: '1',
    decision: 'Prioritized outreach to FinTech companies',
    reasoning: 'FinTech vertical showing 3x higher conversion rate over last 30 days',
    impact: 'positive',
    metrics: {
      before: '12% reply rate',
      after: '34% reply rate',
    },
    confidence: 92,
    timestamp: '1 hour ago',
  },
  {
    id: '2',
    decision: 'Changed email send time from 9 AM to 2 PM',
    reasoning: 'A/B test showed 45% higher open rates in afternoon for enterprise accounts',
    impact: 'positive',
    metrics: {
      before: '18% open rate',
      after: '26% open rate',
    },
    confidence: 88,
    timestamp: '3 hours ago',
  },
  {
    id: '3',
    decision: 'Removed humor from subject lines',
    reasoning: 'Conservative industries responding poorly to casual tone',
    impact: 'neutral',
    metrics: {
      before: '22% open rate',
      after: '21% open rate',
    },
    confidence: 76,
    timestamp: '5 hours ago',
  },
  {
    id: '4',
    decision: 'Increased competitive positioning mentions',
    reasoning: '67% of won deals mentioned competitor switching in discovery',
    impact: 'positive',
    metrics: {
      before: '8% meeting rate',
      after: '14% meeting rate',
    },
    confidence: 91,
    timestamp: '8 hours ago',
  },
]

const impactIcons = {
  positive: TrendingUp,
  negative: TrendingDown,
  neutral: Minus,
}

const impactColors = {
  positive: 'text-green-600 bg-green-100',
  negative: 'text-red-600 bg-red-100',
  neutral: 'text-gray-600 bg-gray-100',
}

export function DecisionLog() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <CardTitle>AI Decision Log</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            {decisions.map((decision) => {
              const ImpactIcon = impactIcons[decision.impact as keyof typeof impactIcons]
              const impactStyle = impactColors[decision.impact as keyof typeof impactColors]

              return (
                <div key={decision.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{decision.decision}</p>
                      <p className="text-xs text-gray-500 mt-1">{decision.timestamp}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {decision.confidence}% confidence
                    </Badge>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-xs font-medium text-gray-600 mb-1">Reasoning:</p>
                    <p className="text-xs text-gray-700">{decision.reasoning}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs">
                      <div>
                        <span className="text-gray-500">Before: </span>
                        <span className="font-medium">{decision.metrics.before}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">After: </span>
                        <span className="font-medium">{decision.metrics.after}</span>
                      </div>
                    </div>
                    <div className={`p-1 rounded ${impactStyle}`}>
                      <ImpactIcon className="h-4 w-4" />
                    </div>
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