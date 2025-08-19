import { useState } from "react"
import { Navigation } from "./components/Navigation"
import { HomePage } from "./components/HomePage"
import { ProjectsPage } from "./components/ProjectsPage"
import { AboutPage } from "./components/AboutPage"
import { ContactPage } from "./components/ContactPage"
import { ProjectDetailPage } from "./components/ProjectDetailPage"

type Page = 'home' | 'projects' | 'about' | 'contact' | 'project-detail'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const handlePageChange = (page: string) => {
    setCurrentPage(page as Page)
    setSelectedProjectId(null)
  }

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId)
    setCurrentPage('project-detail')
  }

  const handleBackToProjects = () => {
    setCurrentPage('projects')
    setSelectedProjectId(null)
  }

  const handleNavigateToProjects = () => {
    setCurrentPage('projects')
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToProjects={handleNavigateToProjects} />
      case 'projects':
        return <ProjectsPage onProjectClick={handleProjectClick} />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'project-detail':
        return selectedProjectId ? (
          <ProjectDetailPage 
            projectId={selectedProjectId} 
            onBack={handleBackToProjects}
          />
        ) : (
          <ProjectsPage onProjectClick={handleProjectClick} />
        )
      default:
        return <HomePage onNavigateToProjects={handleNavigateToProjects} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage === 'project-detail' ? 'projects' : currentPage} 
        onPageChange={handlePageChange} 
      />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  )
}