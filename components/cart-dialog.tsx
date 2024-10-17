import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useCart from '@/hooks/useCart'
import { PaymentMethod } from './payment-card'

export function CartDialog() {
    const { showCart, setShowCart } = useCart()
    return (
        <Dialog open={showCart} onOpenChange={(open) => { setShowCart(open) }}>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Checkout Details</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <PaymentMethod />
            </DialogContent>
        </Dialog>
    )
}
