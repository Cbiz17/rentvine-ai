'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Building2, 
  TrendingUp, 
  Users, 
  DollarSign,
  Globe,
  Calendar,
  Sparkles,
  Brain,
  Target,
  AlertCircle,
  CheckCircle,
  ChevronRight
} from 'lucide-react'

// Mock data - would come from Supabase
const accountData = {
  id: '1',
  name: 'Acme Property Management',
  domain: 'acmepm.com',
  industry: 'Real Estate',
  icpScore: 92,
  employees: '50-200',
  revenue: '$10M-50M',
  technologies: ['Yardi', 'QuickBooks', 'Google Workspace', 'Slack'],
  insights: {
    painPoints: [
      'Manual rent collection process taking 40+ hours/month',
      'Tenant communication fragmented across email/phone',
      'Maintenance requests handled via spreadsheets',
    ],
    opportunities: [
      'Recently posted for "Property Management Software Specialist"',
      'CEO mentioned "digital transformation" in recent interview',
      'Competitor just switched from Yardi to modern solution',
    ],
    timingIndicators: [
      'Budget cycle starts next month',
      'Current Yardi contract expires in 3 months',
      'New VP of Operations started 2 weeks ago',
    ],
  },
  recommendedActions: [
    {
      action: 'Send competitive comparison',
      reason: 'They\'ve been researching AppFolio',
      successRate: 87,
    },
    {
      action: 'Book demo with VP of Ops',
      reason: 'New hire from tech-forward company',
      successRate: 82,
    },
    {
      action: 'Share ROI calculator',
      reason: 'CFO engaged with pricing page 3x',
      successRate: 79,
    },
  ],
}

interface AccountIntelligenceProps {
  accountId: string
}

export function AccountIntelligence({ accountId }: AccountIntelligenceProps) {
  return (
    <div className="space-y-6">
      {/* Account Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{accountData.name}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>{accountData.domain}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Building2 className="h-4 w-4" />
                  <span>{accountData.industry}</span>
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{accountData.icpScore}/100</div>
              <p className="text-sm text-gray-500">ICP Score</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{accountData.employees} employees</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{accountData.revenue} revenue</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {accountData.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>AI Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <p className="text-sm font-medium">Pain Points</p>
            </div>
            <ul className="space-y-1">
              {accountData.insights.painPoints.map((point, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <p className="text-sm font-medium">Opportunities</p>
            </div>
            <ul className="space-y-1">
              {accountData.insights.opportunities.map((opp, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {opp}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <p className="text-sm font-medium">Timing Indicators</p>
            </div>
            <ul className="space-y-1">
              {accountData.insights.timingIndicators.map((indicator, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {indicator}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-primary" />
            <CardTitle>Recommended Actions</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {accountData.recommendedActions.map((rec, idx) => (
            <div key={idx} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-sm">{rec.action}</p>
                <Badge variant="outline">{rec.successRate}% success rate</Badge>
              </div>
              <p className="text-xs text-gray-500 mb-3">{rec.reason}</p>
              <div className="flex items-center justify-between">
                <Progress value={rec.successRate} className="flex-1 mr-4" />
                <Button size="sm">
                  Execute
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}