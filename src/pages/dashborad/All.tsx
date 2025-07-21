
import NewOrderButton from "@components/NewOrderButton";

export default function All() {
    return (
        <>
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-amber-300">All Orders</h2>
            {/* Content for All Orders will go here */}
            <p>This is where you can view all orders.</p>
        </div>
        <NewOrderButton />
        </>
    );
}