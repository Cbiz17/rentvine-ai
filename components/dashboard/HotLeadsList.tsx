'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Flame, Building2, Mail, Phone, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const hotLeads = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Acme Property Management',
    score: 92,
    signals: ['Viewed pricing 3x', 'Downloaded whitepaper', 'C-level'],
    recommendedAction: 'Call now',
    lastActivity: '2 hours ago',
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Urban Living Solutions',
    score: 88,
    signals: ['Competitor research', 'Budget approved', 'Growing fast'],
    recommendedAction: 'Send competitive comparison',
    lastActivity: '4 hours ago',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Sunset Realty Group',
    score: 85,
    signals: ['Multiple site visits', 'Team expansion', 'Tech-forward'],
    recommendedAction: 'LinkedIn connect',
    lastActivity: 'Yesterday',
  },
]

export function HotLeadsList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <CardTitle className="text-lg font-medium">Hot Leads Ready Now</CardTitle>
          </div>
          <Link href="/accounts?filter=hot">
            <Button variant="ghost" size="sm">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hotLeads.map((lead) => (
            <div
              key={lead.id}
              className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{lead.name}</p>
                    <Badge variant="secondary" className="text-xs">
                      {lead.score}% ready
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Building2 className="h-3 w-3" />
                    <span>{lead.company}</span>
                    <span>•</span>
                    <span>{lead.lastActivity}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {lead.signals.map((signal, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {signal}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Button size="sm" variant="default">
                    {lead.recommendedAction === 'Call now' ? (
                      <Phone className="mr-1 h-3 w-3" />
                    ) : (
                      <Mail className="mr-1 h-3 w-3" />
                    )}
                    {lead.recommendedAction}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}