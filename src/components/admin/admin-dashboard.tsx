'use client'

import { useState, useEffect } from 'react'
import { Plus, Eye, Edit2, Download, Save, RotateCcw } from 'lucide-react'
import { PROJECTS as ORIGINAL_PROJECTS, ProjectBlock } from '@/lib/constants'
import { ProjectEditor } from './project-editor'
import { ProjectPreview } from './project-preview'

// 專案類型定義 - 創建可變版本
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

// 將 readonly 轉換為可變版本的輔助函數
const convertToMutable = (readonlyProjects: typeof ORIGINAL_PROJECTS): Project[] => {
  return readonlyProjects.map(project => ({
    ...project,
    tags: [...project.tags],
    detailBlocks: [...project.detailBlocks]
  }))
}

export function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>(() => convertToMutable(ORIGINAL_PROJECTS))
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  // 從 localStorage 載入資料
  useEffect(() => {
    const savedProjects = localStorage.getItem('cms-projects')
    if (savedProjects) {
      try {
        const parsed = JSON.parse(savedProjects)
        setProjects(parsed)
      } catch (error) {
        console.error('Failed to load saved projects:', error)
      }
    }
  }, [])

  // 儲存到 localStorage
  const saveToLocal = (newProjects: Project[]) => {
    localStorage.setItem('cms-projects', JSON.stringify(newProjects))
    setProjects(newProjects)
  }

  // 重置為原始資料
  const resetToOriginal = () => {
    if (confirm('確定要重置為原始資料嗎？這將會清除所有編輯內容。')) {
      localStorage.removeItem('cms-projects')
      setProjects(convertToMutable(ORIGINAL_PROJECTS))
    }
  }

  // 新增專案
  const addProject = () => {
    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: '新專案',
      subtitle: '專案副標題',
      description: '專案描述',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      tags: ['標籤1'],
      duration: '1 個月',
      role: '角色',
      detailBlocks: [
        {
          type: 'hero',
          title: '新專案',
          subtitle: '專案副標題',
          description: '專案描述'
        }
      ]
    }
    
    const newProjects = [...projects, newProject]
    saveToLocal(newProjects)
    setSelectedProject(newProject)
    setIsEditing(true)
  }

  // 儲存專案
  const saveProject = (updatedProject: Project) => {
    const newProjects = projects.map(p => 
      p.id === updatedProject.id ? updatedProject : p
    )
    saveToLocal(newProjects)
    setSelectedProject(updatedProject)
    setIsEditing(false)
  }

  // 刪除專案
  const deleteProject = (projectId: string) => {
    if (confirm('確定要刪除這個專案嗎？')) {
      const newProjects = projects.filter(p => p.id !== projectId)
      saveToLocal(newProjects)
      if (selectedProject?.id === projectId) {
        setSelectedProject(null)
        setIsEditing(false)
      }
    }
  }

  // 匯出 constants.ts 內容
  const exportConstants = () => {
    const constantsContent = `// Works 專案資料結構 - 由 CMS 系統生成
export const PROJECTS = ${JSON.stringify(projects, null, 2)} as const

// 專案內容區塊的類型定義
export type ProjectBlock = 
  | { type: 'hero'; title: string; subtitle: string; description: string }
  | { type: 'text'; title: string; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'results'; title: string; metrics: readonly { label: string; value: string }[] }`

    // 創建下載
    const blob = new Blob([constantsContent], { type: 'text/javascript' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'constants-projects.ts'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頂部工具欄 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">專案內容管理系統</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={resetToOriginal}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <RotateCcw size={16} />
                重置
              </button>
              <button
                onClick={exportConstants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download size={16} />
                匯出 constants.ts
              </button>
              <button
                onClick={addProject}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus size={16} />
                新增專案
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左側：專案列表 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">專案列表</h2>
                <p className="text-sm text-gray-500 mt-1">共 {projects.length} 個專案</p>
              </div>
              <div className="p-4 space-y-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedProject?.id === project.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => {
                      setSelectedProject(project)
                      setIsEditing(false)
                      setShowPreview(false)
                    }}
                  >
                    <h3 className="font-medium text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProject(project)
                            setIsEditing(true)
                            setShowPreview(false)
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProject(project)
                            setShowPreview(true)
                            setIsEditing(false)
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600"
                        >
                          <Eye size={14} />
                        </button>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          deleteProject(project.id)
                        }}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        刪除
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：編輯器或預覽 */}
          <div className="lg:col-span-2">
            {!selectedProject ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <p className="text-gray-500">請選擇一個專案進行編輯或預覽</p>
              </div>
            ) : showPreview ? (
              <ProjectPreview project={selectedProject} />
            ) : isEditing ? (
              <ProjectEditor 
                project={selectedProject}
                onSave={saveProject}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{selectedProject.subtitle}</p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Edit2 size={16} />
                      編輯專案
                    </button>
                    <button
                      onClick={() => setShowPreview(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Eye size={16} />
                      預覽專案
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}