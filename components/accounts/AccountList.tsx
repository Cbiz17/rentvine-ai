'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, TrendingUp, Users, DollarSign } from 'lucide-react'

// Mock data - would come from Supabase
const accounts = [
  {
    id: '1',
    name: 'Acme Property Management',
    industry: 'Real Estate',
    icpScore: 92,
    employees: '50-200',
    revenue: '$10M-50M',
    status: 'hot',
    lastActivity: '2 hours ago',
    signals: ['Budget approved', 'Growing fast'],
  },
  {
    id: '2',
    name: 'Urban Living Solutions',
    industry: 'Property Management',
    icpScore: 88,
    employees: '200-500',
    revenue: '$50M-100M',
    status: 'warm',
    lastActivity: '1 day ago',
    signals: ['Competitor research', 'Team expansion'],
  },
  {
    id: '3',
    name: 'Sunset Realty Group',
    industry: 'Real Estate',
    icpScore: 85,
    employees: '10-50',
    revenue: '$5M-10M',
    status: 'warm',
    lastActivity: '3 days ago',
    signals: ['Tech adoption', 'New funding'],
  },
]

interface AccountListProps {
  searchTerm: string
  selectedAccount: string | null
  onSelectAccount: (id: string) => void
}

export function AccountList({ searchTerm, selectedAccount, onSelectAccount }: AccountListProps) {
  const filteredAccounts = accounts.filter(account =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-3">
      {filteredAccounts.map((account) => (
        <Card
          key={account.id}
          className={`p-4 cursor-pointer transition-all hover:shadow-md ${
            selectedAccount === account.id ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => onSelectAccount(account.id)}
        >
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-sm">{account.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{account.industry}</p>
              </div>
              <Badge
                variant={account.icpScore > 90 ? 'default' : 'secondary'}
                className="text-xs"
              >
                {account.icpScore}% ICP
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-1 text-gray-500">
                <Users className="h-3 w-3" />
                <span>{account.employees}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <DollarSign className="h-3 w-3" />
                <span>{account.revenue}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {account.signals.slice(0, 2).map((signal, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {signal}
                  </Badge>
                ))}
              </div>
              {account.status === 'hot' && (
                <TrendingUp className="h-4 w-4 text-orange-500" />
              )}
            </div>

            <p className="text-xs text-gray-400">{account.lastActivity}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}