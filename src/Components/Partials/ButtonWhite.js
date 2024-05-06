export const ButtonWhite = ({ children, text, type }) => {
    return (
        <button
            className={`flex items-center gap-1.5 px-4 py-2.5 bg-white text-sm whitespace-nowrap text-blue-900 rounded-lg`}
        >
            {children} {text}
        </button>
    );
};
