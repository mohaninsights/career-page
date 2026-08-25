import React, { useState, useRef } from 'react';
import { X, Upload, Link as LinkIcon, RotateCcw, Check, Image as ImageIcon } from 'lucide-react';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  currentImage: string;
  defaultImage: string;
  onSaveImage: (newImageUrl: string) => void;
  onResetDefault: () => void;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  title,
  currentImage,
  defaultImage,
  onSaveImage,
  onResetDefault,
}) => {
  const [tab, setTab] = useState<'upload' | 'url'>('upload');
  const [previewUrl, setPreviewUrl] = useState<string>(currentImage);
  const [urlInput, setUrlInput] = useState<string>('');
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (PNG, JPG, WEBP, etc.)');
      return;
    }
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreviewUrl(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSave = () => {
    if (tab === 'url' && urlInput.trim()) {
      onSaveImage(urlInput.trim());
    } else if (previewUrl) {
      onSaveImage(previewUrl);
    }
    onClose();
  };

  const handleReset = () => {
    onResetDefault();
    setPreviewUrl(defaultImage);
    setUrlInput('');
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF5ED] w-full max-w-lg rounded-2xl shadow-2xl border border-[#D9C4A6] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8D9C5] bg-[#F4EADB]">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#8C3E14]" />
            <h3 className="font-serif-vedic font-bold text-lg text-[#3B190C]">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#7A6354] hover:text-[#3B190C] hover:bg-[#E8D9C5] transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#E8D9C5] bg-[#EFE4D3]">
          <button
            type="button"
            onClick={() => { setTab('upload'); setError(null); }}
            className={`flex-1 py-2.5 text-xs font-bold transition flex items-center justify-center gap-2 ${
              tab === 'upload'
                ? 'bg-[#FAF5ED] text-[#8C3E14] border-b-2 border-[#8C3E14]'
                : 'text-[#6E4B35] hover:text-[#3B190C]'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload from Computer</span>
          </button>
          <button
            type="button"
            onClick={() => { setTab('url'); setError(null); }}
            className={`flex-1 py-2.5 text-xs font-bold transition flex items-center justify-center gap-2 ${
              tab === 'url'
                ? 'bg-[#FAF5ED] text-[#8C3E14] border-b-2 border-[#8C3E14]'
                : 'text-[#6E4B35] hover:text-[#3B190C]'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Image URL</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          
          {tab === 'upload' ? (
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition flex flex-col items-center justify-center gap-2 ${
                dragActive
                  ? 'border-[#8C3E14] bg-[#FAF0DF]'
                  : 'border-[#D9C4A6] hover:border-[#8C3E14] bg-white/60 hover:bg-white'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileChange(e.target.files[0]);
                  }
                }}
              />
              <div className="w-12 h-12 rounded-full bg-[#FAF0DF] border border-[#E8D9C5] flex items-center justify-center text-[#8C3E14]">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-[#3B190C]">
                Click to browse or drag and drop image here
              </p>
              <p className="text-xs text-[#7A6354]">
                Supports JPG, PNG, WEBP, SVG (up to 10MB)
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#3B190C]">
                Paste Image Web Address (URL)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={urlInput}
                  onChange={(e) => {
                    setUrlInput(e.target.value);
                    if (e.target.value.trim()) {
                      setPreviewUrl(e.target.value.trim());
                    }
                  }}
                  className="flex-1 px-3.5 py-2.5 rounded-lg border border-[#D9C4A6] bg-white text-xs text-[#3B190C] focus:outline-hidden focus:ring-2 focus:ring-[#8C3E14]"
                />
              </div>
            </div>
          )}

          {error && (
            <p className="text-xs text-red-600 font-medium">
              {error}
            </p>
          )}

          {/* Live Preview Box */}
          {previewUrl && (
            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-bold text-[#6E4B35] uppercase tracking-wider">
                Preview
              </div>
              <div className="h-44 sm:h-48 rounded-xl overflow-hidden border border-[#D9C4A6] bg-[#2E180E] flex items-center justify-center">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-h-full max-w-full object-contain"
                  onError={() => setError('Unable to load image from provided source. Please check the URL or upload a file.')}
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#E8D9C5] bg-[#F4EADB] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-[#8C3E14] hover:text-[#5C1E0A] font-semibold flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-[#E8D9C5] transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#D9C4A6] text-xs font-semibold text-[#5E4232] hover:bg-white transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-lg bg-[#8C3E14] hover:bg-[#73310E] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Image</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
