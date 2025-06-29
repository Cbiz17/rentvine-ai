'use client'

import { useState } from 'react'
import { AccountList } from '@/components/accounts/AccountList'
import { AccountIntelligence } from '@/components/accounts/AccountIntelligence'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, Plus } from 'lucide-react'

export default function AccountsPage() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Accounts</h1>
            <p className="mt-2 text-sm text-gray-600">
              AI-enriched company intelligence • 342 total accounts
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Account
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <AccountList 
            searchTerm={searchTerm}
            selectedAccount={selectedAccount}
            onSelectAccount={setSelectedAccount}
          />
        </div>
        <div className="lg:col-span-2">
          {selectedAccount ? (
            <AccountIntelligence accountId={selectedAccount} />
          ) : (
            <div className="bg-white rounded-lg border shadow-sm p-8 text-center">
              <p className="text-gray-500">Select an account to view intelligence</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}