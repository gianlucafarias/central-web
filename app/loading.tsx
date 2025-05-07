
export default function Loading() {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#ffdc00]"></div>
        </div>
    )
  }