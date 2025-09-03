import React, { createContext, useContext, useState } from 'react'
import { CheckCircle, Info, XCircle, AlertTriangle, X } from 'lucide-react'

type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface Notification {
    id: number
    type: NotificationType
    message: string
    description?: string
}

interface ConfirmOptions {
    title: string
    description?: string
    okText?: string
    cancelText?: string
}

interface NotifyContextType {
    notify: (notification: Omit<Notification, 'id'>) => void
    confirm: (options: ConfirmOptions) => Promise<boolean>
}

const NotifyContext = createContext<NotifyContextType | undefined>(undefined)

export const useNotify = () => {
    const context = useContext(NotifyContext)
    if (!context) throw new Error('useNotify must be used within a NotificationProvider')
    return context
}

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [confirmState, setConfirmState] = useState<{
        options: ConfirmOptions
        resolve: (value: boolean) => void
    } | null>(null)

    const notify = (notification: Omit<Notification, 'id'>) => {
        const id = Date.now()
        setNotifications((prev) => [...prev, { ...notification, id }])

        setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== id))
        }, 3000)
    }

    const confirm = (options: ConfirmOptions) => {
        return new Promise<boolean>((resolve) => {
            setConfirmState({ options, resolve })
        })
    }

    const handleConfirm = (result: boolean) => {
        if (confirmState) {
            confirmState.resolve(result)
            setConfirmState(null)
        }
    }

    const iconMap = {
        success: <CheckCircle className="text-green-500" />,
        error: <XCircle className="text-red-500" />,
        info: <Info className="text-blue-500" />,
        warning: <AlertTriangle className="text-yellow-500" />,
    }

    const bgMap = {
        success: 'bg-green-50 border-green-500',
        error: 'bg-red-50 border-red-500',
        info: 'bg-blue-50 border-blue-500',
        warning: 'bg-yellow-50 border-yellow-500',
    }

    return (
        <NotifyContext.Provider value={{ notify, confirm }}>
            {children}

            {/* Toast Notifications */}
            <div className="fixed top-4 right-4 space-y-2 z-50">
                {notifications.map(({ id, type, message, description }) => (
                    <div
                        key={id}
                        className={`border-l-4 shadow-lg p-4 w-80 rounded-lg ${bgMap[type]} bg-white`}
                    >
                        <div className="flex items-start space-x-3">
                            {iconMap[type]}
                            <div className="flex-1">
                                <div className="font-semibold">{message}</div>
                                {description && (
                                    <div className="text-sm text-gray-600">{description}</div>
                                )}
                            </div>
                            <button
                                onClick={() =>
                                    setNotifications((prev) => prev.filter((n) => n.id !== id))
                                }
                                className="text-gray-400 hover:text-black"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Confirm Modal */}
            {confirmState && (

                <React.Fragment>
                    <div className='notification-overlay'>

                    </div>
                    <div className="fixed inset-0 z-50   flex items-center justify-center">

                        <div className="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4">
                            <h2 className="text-lg font-semibold">{confirmState.options.title}</h2>
                            {confirmState.options.description && (
                                <p className="text-sm text-gray-600">
                                    {confirmState.options.description}
                                </p>
                            )}
                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    onClick={() => handleConfirm(false)}
                                    className="px-4 py-1.5 rounded border text-gray-600 hover:bg-gray-100"
                                >
                                    {confirmState.options.cancelText || 'Hủy'}
                                </button>
                                <button
                                    onClick={() => handleConfirm(true)}
                                    className="px-4 py-1.5 rounded bg-blue-500 text-white "
                                >
                                    {confirmState.options.okText || 'Đồng ý'}
                                </button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>

            )}

        </NotifyContext.Provider>
    )
}
