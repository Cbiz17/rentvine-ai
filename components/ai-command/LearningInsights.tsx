'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Lightbulb, TrendingUp, Users, Mail, Calendar } from 'lucide-react'

const insights = [
  {
    id: '1',
    category: 'Pattern Discovery',
    icon: Lightbulb,
    insight: 'Property management companies with 50-200 units respond 3x better to ROI-focused messaging',
    impact: 'Updating 42 active sequences',
    confidence: 94,
    samplesAnalyzed: 1247,
  },
  {
    id: '2',
    category: 'Timing Optimization',
    icon: Calendar,
    insight: 'Tuesday 2-4 PM shows highest engagement for C-level executives in real estate',
    impact: 'Rescheduling 18 upcoming emails',
    confidence: 89,
    samplesAnalyzed: 892,
  },
  {
    id: '3',
    category: 'Message Effectiveness',
    icon: Mail,
    insight: 'Subject lines mentioning specific competitor names increase open rates by 42%',
    impact: 'A/B testing in 15 sequences',
    confidence: 87,
    samplesAnalyzed: 2103,
  },
  {
    id: '4',
    category: 'Persona Insight',
    icon: Users,
    insight: 'VP of Operations 2.5x more likely to respond than Property Managers',
    impact: 'Reprioritizing contact targeting',
    confidence: 91,
    samplesAnalyzed: 567,
  },
]

const categoryColors = {
  'Pattern Discovery': 'bg-purple-100 text-purple-800',
  'Timing Optimization': 'bg-blue-100 text-blue-800',
  'Message Effectiveness': 'bg-green-100 text-green-800',
  'Persona Insight': 'bg-orange-100 text-orange-800',
}

export function LearningInsights() {
  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Patterns Discovered</p>
            <p className="text-3xl font-bold mt-2">47</p>
            <p className="text-xs text-gray-500 mt-1">Last 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Sequences Improved</p>
            <p className="text-3xl font-bold mt-2">124</p>
            <p className="text-xs text-gray-500 mt-1">+23% performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-600">Data Points Analyzed</p>
            <p className="text-3xl font-bold mt-2">18.2K</p>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Insights List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Latest Learning Insights</CardTitle>
            <Badge variant="outline">Real-time</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight) => {
              const Icon = insight.icon
              const categoryStyle = categoryColors[insight.category as keyof typeof categoryColors]

              return (
                <div key={insight.id} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${categoryStyle}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {insight.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {insight.samplesAnalyzed.toLocaleString()} samples
                        </span>
                      </div>
                      <p className="text-sm font-medium mb-2">{insight.insight}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-600">{insight.impact}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">Confidence</span>
                          <Progress value={insight.confidence} className="w-16 h-2" />
                          <span className="text-xs font-medium">{insight.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}