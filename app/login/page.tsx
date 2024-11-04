import AuthForm from '../components/AuthForm';

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-8">
                <h1 className="text-3xl font-semibold mb-4">Login</h1>
                <p className="text-gray-500 mb-4">
                    Welcome back! Login to your account.
                </p>
                <AuthForm mode="login" />
            </div>
        </div>
    );
}