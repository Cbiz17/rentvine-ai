'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AIActivityLog } from '@/components/ai-command/AIActivityLog'
import { DecisionLog } from '@/components/ai-command/DecisionLog'
import { LearningInsights } from '@/components/ai-command/LearningInsights'
import { AIMetrics } from '@/components/ai-command/AIMetrics'
import { Badge } from '@/components/ui/badge'
import { Bot, Activity, Brain, TrendingUp } from 'lucide-react'

export default function AICommandPage() {
  const [activeTab, setActiveTab] = useState('activity')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3">
              <Bot className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">AI Command Center</h1>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Real-time visibility into AI operations • Full transparency mode
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-sm">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-2" />
              247 AI tasks today
            </Badge>
          </div>
        </div>
      </div>

      {/* AI Metrics Overview */}
      <AIMetrics />

      {/* Main Tabs */}
      <div className="mt-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="activity" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>What's Happening Now</span>
            </TabsTrigger>
            <TabsTrigger value="decisions" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Decision Log</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Learning Insights</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="mt-6">
            <AIActivityLog />
          </TabsContent>

          <TabsContent value="decisions" className="mt-6">
            <DecisionLog />
          </TabsContent>

          <TabsContent value="insights" className="mt-6">
            <LearningInsights />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}