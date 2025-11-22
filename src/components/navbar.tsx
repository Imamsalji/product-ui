
const Navbar = () => {
    return (
        <div className="bg-white shadow p-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Simple Navbar</h1>
            <div className="flex items-center gap-4">
                <span>User</span>
                <img src="https://via.placeholder.com/32" alt="avatar" className="rounded-full" />
            </div>
        </div>
    );
};

export default Navbar;
