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
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Checkout Details</DialogTitle>
                    <DialogDescription>
                        Manage your purchases.
                    </DialogDescription>
                </DialogHeader>

                <PaymentMethod />

            </DialogContent>
        </Dialog>
    )
}
