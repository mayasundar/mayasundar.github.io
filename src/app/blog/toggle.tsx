"use client";
import { useRouter } from 'next/navigation';

export default function ClientViewToggle({ isMini }) {
    const router = useRouter();

    const handleToggleView = () => {
        router.push(isMini ? "/blog" : "/blog?mini=true");
    };

    return (
        <button
            onClick={handleToggleView}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
            {isMini ? 'Open Full Page' : 'Open in Sidebar'}
        </button>
    );
}