import React from 'react';
import { Layers, BookmarkCheck, Users, Zap } from 'lucide-react';

export default function Header({ totalPosts, savedCount, totalUsers }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-slate-800 p-8 sm:p-12 mb-10 shadow-2xl">
      {/* Background Decorative Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>React.js + Tailwind CSS + LocalStorage</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Khám Phá & Lưu Trữ <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bài Viết Công Nghệ Đổi Mới
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
          Ứng dụng minh họa kết nối RESTful API từ JSONPlaceholder, hỗ trợ tìm kiếm bài viết thời gian thực và lưu bài viết yêu thích vào LocalStorage của trình duyệt.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
              <Layers className="w-3.5 h-3.5 text-indigo-400" /> Tổng bài viết
            </span>
            <span className="text-2xl font-bold text-white">{totalPosts}</span>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
              <BookmarkCheck className="w-3.5 h-3.5 text-purple-400" /> Đã lưu
            </span>
            <span className="text-2xl font-bold text-white">{savedCount}</span>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
              <Users className="w-3.5 h-3.5 text-pink-400" /> Tác giả
            </span>
            <span className="text-2xl font-bold text-white">{totalUsers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
