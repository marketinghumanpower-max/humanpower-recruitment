import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import App from '@/App'
import { JobSearchPage, InternalJobsPage, GeneralAboutPage, BoardOfDirectorsPage, BenefitsPage, AdvancementPage, CareerGuidePage, ApplicationResultsPage } from '@/features/recruitment'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'jobs',
        element: <JobSearchPage />,
      },
      {
        path: 'tim-viec',
        element: <JobSearchPage />,
      },
      {
        path: 'viec-lam-noi-bo',
        element: <InternalJobsPage />,
      },
      {
        path: 'internal-jobs',
        element: <InternalJobsPage />,
      },
      {
        path: 'gioi-thieu',
        element: <GeneralAboutPage />,
      },
      {
        path: 'gioi-thieu-chung',
        element: <GeneralAboutPage />,
      },
      {
        path: 'hoi-dong-quan-tri',
        element: <BoardOfDirectorsPage />,
      },
      {
        path: 'board-of-directors',
        element: <BoardOfDirectorsPage />,
      },
      {
        path: 'about',
        element: <GeneralAboutPage />,
      },
      {
        path: 'phuc-loi',
        element: <BenefitsPage />,
      },
      {
        path: 'benefits',
        element: <BenefitsPage />,
      },
      {
        path: 'life-at-mwg/phuc-loi',
        element: <BenefitsPage />,
      },
      {
        path: 'thang-tien',
        element: <AdvancementPage />,
      },
      {
        path: 'advancement',
        element: <AdvancementPage />,
      },
      {
        path: 'life-at-mwg/thang-tien',
        element: <AdvancementPage />,
      },
      {
        path: 'huong-nghiep',
        element: <CareerGuidePage />,
      },
      {
        path: 'cuoc-song-mwg',
        element: <CareerGuidePage />,
      },
      {
        path: 'life-at-mwg/cuoc-song-mwg',
        element: <CareerGuidePage />,
      },
      {
        path: 'career-guide',
        element: <CareerGuidePage />,
      },
      {
        path: 'huong-nghiep-bai-viet',
        element: <CareerGuidePage />,
      },
      {
        path: 'ket-qua-ung-tuyen',
        element: <ApplicationResultsPage />,
      },
      {
        path: 'tra-cuu-ket-qua',
        element: <ApplicationResultsPage />,
      },
      {
        path: 'results',
        element: <ApplicationResultsPage />,
      },
    ],
  },
])



