import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "../../../components/admin/date-range-picker"
import { Overview } from "../../../components/admin/overview"
import { RecentSales } from "../../../components/admin/recent-sales"
import OrdersList from '../../../components/admin/orders-list'
import { Analytics } from '../../../components/admin/analytics'
import { Search } from '../../../components/admin/search'
export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
    return (
        <div className="container mx-auto flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <CalendarDateRangePicker />
                    <Button>Download</Button>
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                <div className='flex justify-between'>
                    <TabsList>
                        <TabsTrigger value="overview" >
                            Analytics
                        </TabsTrigger>

                    </TabsList>
                    <Search />
                </div>
                <TabsContent value="overview" className="space-y-4">
                    <Analytics />
                </TabsContent>
            </Tabs>
        </div>
    )
}