'use client'

import { SKILLS } from '@/lib/constants'

/**
 * 技能展示組件 - 靜態版本
 * 移除動畫，純粹展示
 */
export function Skills() {
  return (
    <div className="mt-16 pt-16 border-t border-black/10">
      <h3 className="text-heading text-black mb-8">核心技能</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {SKILLS.map((skill, index) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-body font-medium text-black">{skill.name}</span>
              <span className="text-caption text-black/60">{skill.level}%</span>
            </div>
            <div className="w-full bg-black/10 h-2 overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`,
                  transitionDelay: `${index * 0.2}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}