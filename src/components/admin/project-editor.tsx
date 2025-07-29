'use client'

import { useState } from 'react'
import { Save, X, Plus, Trash2, MoveUp, MoveDown } from 'lucide-react'
import type { ProjectBlock } from '@/lib/constants'

type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  duration: string
  role: string
  detailBlocks: ProjectBlock[]
}

interface ProjectEditorProps {
  project: Project
  onSave: (project: Project) => void
  onCancel: () => void
}

export function ProjectEditor({ project, onSave, onCancel }: ProjectEditorProps) {
  const [editingProject, setEditingProject] = useState<Project>({
    ...project,
    tags: [...project.tags],
    detailBlocks: [...project.detailBlocks]
  })

  const updateProject = (updates: Partial<Project>) => {
    setEditingProject(prev => ({ ...prev, ...updates }))
  }

  const updateBlock = (index: number, updates: Partial<ProjectBlock>) => {
    const newBlocks = [...editingProject.detailBlocks]
    const currentBlock = newBlocks[index]
    
    // 根據區塊類型進行安全的更新
    if (currentBlock.type === 'hero' && updates.type === 'hero') {
      newBlocks[index] = { ...currentBlock, ...updates }
    } else if (currentBlock.type === 'text' && updates.type === 'text') {
      newBlocks[index] = { ...currentBlock, ...updates }
    } else if (currentBlock.type === 'image' && updates.type === 'image') {
      newBlocks[index] = { ...currentBlock, ...updates }
    } else if (currentBlock.type === 'results' && updates.type === 'results') {
      newBlocks[index] = { ...currentBlock, ...updates }
    } else {
      // 對於相同類型的更新，直接合併
      newBlocks[index] = { ...currentBlock, ...updates } as ProjectBlock
    }
    
    updateProject({ detailBlocks: newBlocks })
  }

  const addBlock = (type: ProjectBlock['type']) => {
    let newBlock: ProjectBlock
    
    switch (type) {
      case 'hero':
        newBlock = {
          type: 'hero',
          title: '新標題',
          subtitle: '副標題',
          description: '描述'
        }
        break
      case 'text':
        newBlock = {
          type: 'text',
          title: '段落標題',
          content: '段落內容'
        }
        break
      case 'image':
        newBlock = {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80',
          alt: '圖片描述',
          caption: '圖片說明'
        }
        break
      case 'video':
        newBlock = {
          type: 'video',
          src: '/path/to/video.mp4',
          alt: '影片描述',
          caption: '影片說明'
        }
        break
      case 'link-preview':
        newBlock = {
          type: 'link-preview',
          url: 'https://example.com',
          title: '連結標題',
          description: '連結描述',
          domain: 'example.com'
        }
        break
      case 'results':
        newBlock = {
          type: 'results',
          title: '成果展示',
          metrics: [
            { label: '指標1', value: '100%' },
            { label: '指標2', value: '200%' },
            { label: '指標3', value: '300%' }
          ]
        }
        break
      case 'services':
        newBlock = {
          type: 'services',
          title: '提供服務',
          subtitle: '副標題',
          description: '服務描述',
          services: [
            { name: '服務1' },
            { name: '服務2' },
            { name: '服務3' }
          ]
        }
        break
      case 'gallery':
        newBlock = {
          type: 'gallery',
          images: [
            { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80', alt: '圖片1' },
            { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80', alt: '圖片2' },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', alt: '圖片3' }
          ]
        }
        break
      case 'quote':
        newBlock = {
          type: 'quote',
          content: '這是一段引用文字',
          author: '作者名稱'
        }
        break
      default:
        return
    }

    updateProject({ 
      detailBlocks: [...editingProject.detailBlocks, newBlock] 
    })
  }

  const removeBlock = (index: number) => {
    const newBlocks = editingProject.detailBlocks.filter((_, i) => i !== index)
    updateProject({ detailBlocks: newBlocks })
  }

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...editingProject.detailBlocks]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    
    if (targetIndex >= 0 && targetIndex < newBlocks.length) {
      [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]]
      updateProject({ detailBlocks: newBlocks })
    }
  }

  const updateTags = (tagString: string) => {
    const tags = tagString.split(',').map(tag => tag.trim()).filter(Boolean)
    updateProject({ tags })
  }

  const handleSave = () => {
    onSave(editingProject)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* 編輯器標題 */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">編輯專案</h2>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <X size={16} />
              取消
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Save size={16} />
              儲存
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* 基本資訊 */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">基本資訊</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">專案標題</label>
              <input
                type="text"
                value={editingProject.title}
                onChange={(e) => updateProject({ title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">副標題</label>
              <input
                type="text"
                value={editingProject.subtitle}
                onChange={(e) => updateProject({ subtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">專案描述</label>
            <textarea
              value={editingProject.description}
              onChange={(e) => updateProject({ description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">專案時長</label>
              <input
                type="text"
                value={editingProject.duration}
                onChange={(e) => updateProject({ duration: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">我的角色</label>
              <input
                type="text"
                value={editingProject.role}
                onChange={(e) => updateProject({ role: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">標籤 (用逗號分隔)</label>
              <input
                type="text"
                value={editingProject.tags.join(', ')}
                onChange={(e) => updateTags(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="設計, 開發, 策略"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">主要圖片 URL</label>
            <input
              type="url"
              value={editingProject.image}
              onChange={(e) => updateProject({ image: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="https://images.unsplash.com/..."
            />
          </div>
        </div>

        {/* 內容區塊 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">內容區塊</h3>
            <div className="flex gap-2">
              <button
                onClick={() => addBlock('hero')}
                className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
              >
                + Hero
              </button>
              <button
                onClick={() => addBlock('text')}
                className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors"
              >
                + 文字
              </button>
              <button
                onClick={() => addBlock('image')}
                className="px-3 py-1 text-xs bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 transition-colors"
              >
                + 圖片
              </button>
              <button
                onClick={() => addBlock('video')}
                className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors"
              >
                + 影片
              </button>
              <button
                onClick={() => addBlock('link-preview')}
                className="px-3 py-1 text-xs bg-cyan-100 text-cyan-800 rounded-full hover:bg-cyan-200 transition-colors"
              >
                + 連結
              </button>
              <button
                onClick={() => addBlock('results')}
                className="px-3 py-1 text-xs bg-orange-100 text-orange-800 rounded-full hover:bg-orange-200 transition-colors"
              >
                + 成果
              </button>
              <button
                onClick={() => addBlock('services')}
                className="px-3 py-1 text-xs bg-teal-100 text-teal-800 rounded-full hover:bg-teal-200 transition-colors"
              >
                + 服務
              </button>
              <button
                onClick={() => addBlock('gallery')}
                className="px-3 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full hover:bg-indigo-200 transition-colors"
              >
                + 圖庫
              </button>
              <button
                onClick={() => addBlock('quote')}
                className="px-3 py-1 text-xs bg-pink-100 text-pink-800 rounded-full hover:bg-pink-200 transition-colors"
              >
                + 引用
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {editingProject.detailBlocks.map((block, index) => (
              <BlockEditor
                key={index}
                block={block}
                index={index}
                onUpdate={(updates) => updateBlock(index, updates)}
                onRemove={() => removeBlock(index)}
                onMoveUp={index > 0 ? () => moveBlock(index, 'up') : undefined}
                onMoveDown={index < editingProject.detailBlocks.length - 1 ? () => moveBlock(index, 'down') : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 區塊編輯器組件
interface BlockEditorProps {
  block: ProjectBlock
  index: number
  onUpdate: (updates: Partial<ProjectBlock>) => void
  onRemove: () => void
  onMoveUp?: () => void
  onMoveDown?: () => void
}

function BlockEditor({ block, index, onUpdate, onRemove, onMoveUp, onMoveDown }: BlockEditorProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hero': return 'bg-blue-100 text-blue-800'
      case 'text': return 'bg-green-100 text-green-800'
      case 'image': return 'bg-purple-100 text-purple-800'
      case 'video': return 'bg-red-100 text-red-800'
      case 'link-preview': return 'bg-cyan-100 text-cyan-800'
      case 'results': return 'bg-orange-100 text-orange-800'
      case 'services': return 'bg-teal-100 text-teal-800'
      case 'gallery': return 'bg-indigo-100 text-indigo-800'
      case 'quote': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(block.type)}`}>
            {block.type.toUpperCase()}
          </span>
          <span className="text-sm text-gray-500">區塊 {index + 1}</span>
        </div>
        <div className="flex gap-2">
          {onMoveUp && (
            <button onClick={onMoveUp} className="p-1 text-gray-400 hover:text-gray-600">
              <MoveUp size={16} />
            </button>
          )}
          {onMoveDown && (
            <button onClick={onMoveDown} className="p-1 text-gray-400 hover:text-gray-600">
              <MoveDown size={16} />
            </button>
          )}
          <button onClick={onRemove} className="p-1 text-red-400 hover:text-red-600">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {block.type === 'hero' && (
        <div className="space-y-3">
          <input
            type="text"
            value={block.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            placeholder="Hero 標題"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.subtitle}
            onChange={(e) => onUpdate({ subtitle: e.target.value })}
            placeholder="Hero 副標題"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <textarea
            value={block.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            placeholder="Hero 描述"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>
      )}

      {block.type === 'text' && (
        <div className="space-y-3">
          <input
            type="text"
            value={block.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            placeholder="段落標題"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <textarea
            value={block.content}
            onChange={(e) => onUpdate({ content: e.target.value })}
            placeholder="段落內容"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>
      )}

      {block.type === 'image' && (
        <div className="space-y-3">
          <input
            type="url"
            value={block.src}
            onChange={(e) => onUpdate({ src: e.target.value })}
            placeholder="圖片 URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.alt}
            onChange={(e) => onUpdate({ alt: e.target.value })}
            placeholder="圖片 Alt 文字"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.caption || ''}
            onChange={(e) => onUpdate({ caption: e.target.value })}
            placeholder="圖片說明 (可選)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>
      )}

      {block.type === 'video' && (
        <div className="space-y-3">
          <input
            type="text"
            value={block.src}
            onChange={(e) => onUpdate({ src: e.target.value })}
            placeholder="影片路徑 (如: /images/project/video.mp4)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.alt}
            onChange={(e) => onUpdate({ alt: e.target.value })}
            placeholder="影片描述"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.caption || ''}
            onChange={(e) => onUpdate({ caption: e.target.value })}
            placeholder="影片說明 (可選)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>
      )}

      {block.type === 'link-preview' && (
        <div className="space-y-3">
          <input
            type="url"
            value={block.url}
            onChange={(e) => onUpdate({ url: e.target.value })}
            placeholder="連結 URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            placeholder="連結標題"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <textarea
            value={block.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            placeholder="連結描述"
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.domain}
            onChange={(e) => onUpdate({ domain: e.target.value })}
            placeholder="網域名稱 (如: example.com)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>
      )}

      {block.type === 'results' && (
        <div className="space-y-3">
          <input
            type="text"
            value={block.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            placeholder="成果標題"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">成果指標</label>
            {block.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="flex gap-2">
                <input
                  type="text"
                  value={metric.label}
                  onChange={(e) => {
                    const newMetrics = [...block.metrics]
                    newMetrics[metricIndex] = { ...metric, label: e.target.value }
                    onUpdate({ metrics: newMetrics })
                  }}
                  placeholder="指標名稱"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
                <input
                  type="text"
                  value={metric.value}
                  onChange={(e) => {
                    const newMetrics = [...block.metrics]
                    newMetrics[metricIndex] = { ...metric, value: e.target.value }
                    onUpdate({ metrics: newMetrics })
                  }}
                  placeholder="數值"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
                <button
                  onClick={() => {
                    const newMetrics = block.metrics.filter((_, i) => i !== metricIndex)
                    onUpdate({ metrics: newMetrics })
                  }}
                  className="p-2 text-red-400 hover:text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const newMetrics = [...block.metrics, { label: '新指標', value: '100%' }]
                onUpdate({ metrics: newMetrics })
              }}
              className="w-full px-3 py-2 border border-dashed border-gray-300 text-gray-500 rounded-lg hover:border-gray-400 hover:text-gray-600 transition-colors"
            >
              + 新增指標
            </button>
          </div>
        </div>
      )}

      {block.type === 'gallery' && (
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">圖片列表</label>
          {block.images.map((image, imageIndex) => (
            <div key={imageIndex} className="flex gap-2">
              <input
                type="url"
                value={image.src}
                onChange={(e) => {
                  const newImages = [...block.images]
                  newImages[imageIndex] = { ...image, src: e.target.value }
                  onUpdate({ images: newImages })
                }}
                placeholder="圖片 URL"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
              <input
                type="text"
                value={image.alt}
                onChange={(e) => {
                  const newImages = [...block.images]
                  newImages[imageIndex] = { ...image, alt: e.target.value }
                  onUpdate({ images: newImages })
                }}
                placeholder="Alt 文字"
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
              <button
                onClick={() => {
                  const newImages = block.images.filter((_, i) => i !== imageIndex)
                  onUpdate({ images: newImages })
                }}
                className="p-2 text-red-400 hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <button
            onClick={() => {
              const newImages = [...block.images, { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80', alt: '新圖片' }]
              onUpdate({ images: newImages })
            }}
            className="w-full px-3 py-2 border border-dashed border-gray-300 text-gray-500 rounded-lg hover:border-gray-400 hover:text-gray-600 transition-colors"
          >
            + 新增圖片
          </button>
        </div>
      )}

      {block.type === 'services' && (
        <div className="space-y-3">
          <input
            type="text"
            value={block.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            placeholder="標題"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.subtitle}
            onChange={(e) => onUpdate({ subtitle: e.target.value })}
            placeholder="副標題"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <textarea
            value={block.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            placeholder="描述"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">服務項目</label>
            {block.services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="flex gap-2">
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => {
                    const newServices = [...block.services]
                    newServices[serviceIndex] = { ...service, name: e.target.value }
                    onUpdate({ services: newServices })
                  }}
                  placeholder="服務名稱"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
                <button
                  onClick={() => {
                    const newServices = block.services.filter((_, i) => i !== serviceIndex)
                    onUpdate({ services: newServices })
                  }}
                  className="p-2 text-red-400 hover:text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const newServices = [...block.services, { name: '新服務' }]
                onUpdate({ services: newServices })
              }}
              className="w-full px-3 py-2 border border-dashed border-gray-300 text-gray-500 rounded-lg hover:border-gray-400 hover:text-gray-600 transition-colors"
            >
              + 新增服務
            </button>
          </div>
        </div>
      )}

      {block.type === 'quote' && (
        <div className="space-y-3">
          <textarea
            value={block.content}
            onChange={(e) => onUpdate({ content: e.target.value })}
            placeholder="引用內容"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <input
            type="text"
            value={block.author || ''}
            onChange={(e) => onUpdate({ author: e.target.value })}
            placeholder="作者名稱 (可選)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>
      )}
    </div>
  )
}