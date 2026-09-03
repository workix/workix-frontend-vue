// Cliente HTTP fake, com a mesma "forma" de resposta do Axios ({ data, status }),
// usado no lugar do backend real agora que o Workix roda 100% estático (GitHub Pages).
// Cada rota antiga da API (http://localhost:8080/workix/services/v1/...) é
// resolvida aqui a partir dos dados em mockData.js.

import {
  jobs,
  companies,
  candidates,
  candidateShort,
  buildResume,
  blogs,
  categories,
  timePeriods,
  testimonials,
  team,
  statistics,
  lookupCep
} from './mockData'

const NETWORK_DELAY = 250

// Candidatos criados durante a sessão via cadastro (não persiste após recarregar a página)
const sessionCandidates = []

function allCandidates () {
  return [...candidates, ...sessionCandidates]
}

function respond (data, status = 200) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data, status, statusText: 'OK', headers: {}, config: {} }), NETWORK_DELAY)
  })
}

function fail (message, status = 404) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ response: { status, data: { message } }, message }), NETWORK_DELAY)
  })
}

function paginate (rows, page, limit) {
  const currentPage = Math.max(1, parseInt(page) || 1)
  const limitRows = Math.max(1, parseInt(limit) || 10)
  const totalRows = rows.length
  const totalPages = Math.max(1, Math.ceil(totalRows / limitRows))
  const start = (currentPage - 1) * limitRows
  return {
    rows: rows.slice(start, start + limitRows),
    currentPage,
    limitRows,
    totalRows,
    totalPages
  }
}

function pathAndQuery (url) {
  const u = new URL(url)
  return { pathname: u.pathname, query: u.searchParams }
}

function tokenToCandidateId (config) {
  const auth = config && config.headers && config.headers.Authorization
  const match = /mock\.(\d+)\.token/.exec(auth || '')
  return match ? parseInt(match[1]) : candidates[0].id
}

/* ------------------------------------------------------------------ */
/* GET                                                                 */
/* ------------------------------------------------------------------ */

function get (url, config) {
  const { pathname, query } = pathAndQuery(url)

  if (pathname === '/workix/services/v1/auth/me') {
    const id = tokenToCandidateId(config)
    const candidate = allCandidates().find(c => c.id === id) || candidates[0]
    return respond({ owner: candidate, type: 'Candidate' })
  }

  if (pathname === '/workix/services/v1/resumes/list_with_candidates_short_paginated') {
    const rows = allCandidates().map(candidateShort)
    return respond(paginate(rows, query.get('page'), query.get('limit')))
  }

  let m = pathname.match(/^\/workix\/services\/v1\/resumes\/(\d+)$/)
  if (m) {
    const candidate = allCandidates().find(c => c.id === parseInt(m[1]))
    if (!candidate) return fail('Currículo não encontrado')
    return respond(buildResume(candidate))
  }

  if (pathname === '/workix/services/v1/blogs/paginated') {
    return respond(paginate(blogs, query.get('page'), query.get('limit')))
  }

  if (pathname === '/workix/services/v1/blogs/categories') {
    return respond(categories)
  }

  if (pathname === '/workix/services/v1/blogs/time_periods') {
    return respond(timePeriods)
  }

  if (pathname === '/workix/services/v1/blogs/recents') {
    const max = parseInt(query.get('max')) || 4
    return respond(blogs.slice(0, max))
  }

  m = pathname.match(/^\/workix\/services\/v1\/blogs\/(\d+)$/)
  if (m) {
    const post = blogs.find(b => b.id === parseInt(m[1]))
    if (!post) return fail('Postagem não encontrada')
    return respond(post)
  }

  if (pathname === '/workix/services/v1/blogs') {
    const max = parseInt(query.get('max')) || 5
    return respond(blogs.slice(0, max))
  }

  if (pathname === '/workix/services/v1/comments/recents') {
    const max = parseInt(query.get('max')) || 4
    const allComments = blogs.flatMap(b => b.comments)
    return respond(allComments.slice(0, max))
  }

  if (pathname === '/workix/services/v1/jobs/paginated') {
    return respond(paginate(jobs, query.get('page'), query.get('limit')))
  }

  if (pathname === '/workix/services/v1/jobs/feature') {
    const featured = query.get('feature') === 'true'
    const max = parseInt(query.get('max')) || 10
    return respond(jobs.filter(j => j.featured === featured).slice(0, max))
  }

  if (pathname === '/workix/services/v1/jobs/random_featured') {
    const featuredJobs = jobs.filter(j => j.featured)
    const pick = featuredJobs[Math.floor(Math.random() * featuredJobs.length)]
    return respond(pick)
  }

  m = pathname.match(/^\/workix\/services\/v1\/jobs\/company\/(\d+)$/)
  if (m) {
    const companyId = parseInt(m[1])
    return respond(jobs.filter(j => j.company.id === companyId))
  }

  m = pathname.match(/^\/workix\/services\/v1\/jobs\/(\d+)$/)
  if (m) {
    const job = jobs.find(j => j.id === parseInt(m[1]))
    if (!job) return fail('Vaga não encontrada')
    return respond(job)
  }

  if (pathname === '/workix/services/v1/companies/logos') {
    const max = parseInt(query.get('max')) || 12
    return respond(companies.slice(0, max).map(c => ({ id: c.id, logo: c.logo })))
  }

  m = pathname.match(/^\/workix\/services\/v1\/companies\/(\d+)$/)
  if (m) {
    const company = companies.find(c => c.id === parseInt(m[1]))
    if (!company) return fail('Empresa não encontrada')
    return respond(company)
  }

  if (pathname === '/workix/services/v1/testimonials') {
    const max = parseInt(query.get('max')) || 4
    return respond(testimonials.slice(0, max))
  }

  if (pathname === '/workix/services/v1/members') {
    return respond(team)
  }

  if (pathname === '/workix/services/v1/statistics') {
    return respond(statistics)
  }

  m = pathname.match(/^\/1\/zipcodes\/(.+)$/)
  if (m) {
    return respond(lookupCep(m[1]))
  }

  return fail(`Rota mock não encontrada: GET ${pathname}`)
}

/* ------------------------------------------------------------------ */
/* POST                                                                */
/* ------------------------------------------------------------------ */

function post (url, payload) {
  const { pathname } = pathAndQuery(url)

  if (pathname === '/workix/services/v1/auth/login') {
    const { firebaseUUID } = payload || {}
    const candidate = allCandidates().find(c => c.user.firebaseUUID === firebaseUUID) || candidates[0]
    return respond({ token: `mock.${candidate.id}.token` })
  }

  if (pathname === '/workix/services/v1/vue/create_candidate') {
    const id = 1000 + sessionCandidates.length + 1
    const base = candidates[sessionCandidates.length % candidates.length]
    const newCandidate = {
      ...base,
      id,
      uuid: `cand-${id}-workix`,
      name: payload.name,
      cpf: payload.cpf,
      birthDate: payload.birthDate ? new Date(payload.birthDate) : base.birthDate,
      user: {
        ...base.user,
        id,
        email: payload.email,
        firebaseUUID: payload.firebaseUUID
      }
    }
    sessionCandidates.push(newCandidate)
    return respond({ candidate: newCandidate, jwt: { token: `mock.${id}.token` } })
  }

  if (pathname === '/workix/services/v1/vue/create_company') {
    const id = 100 + companies.length + 1
    return respond({ company: { id, name: 'Nova Empresa' }, jwt: { token: `mock.company.${id}.token` } })
  }

  if (pathname === '/workix/services/v1/comments/blog') {
    const post = blogs.find(b => b.id === parseInt(payload.postId))
    if (post) {
      post.comments.push({ name: payload.name, text: payload.message, createdAt: new Date() })
    }
    return respond({ ok: true })
  }

  if (pathname === '/workix/services/v1/candidates/notify') {
    return respond({ sent: true })
  }

  if (pathname === '/workix/services/v1/subscribers/subscribe') {
    return respond({ subscribed: true, message: 'Você foi inscrito com sucesso em nosso boletim informativo!' })
  }

  if (pathname === '/workix/services/v1/forms') {
    return respond({ received: true }, 201)
  }

  return fail(`Rota mock não encontrada: POST ${pathname}`)
}

/* ------------------------------------------------------------------ */
/* PUT                                                                 */
/* ------------------------------------------------------------------ */

function put (url, payload) {
  const { pathname } = pathAndQuery(url)

  if (pathname === '/workix/services/v1/vue/update_by_token') {
    const { candidate } = payload
    const list = allCandidates()
    const existing = list.find(c => c.id === parseInt(candidate.id))
    if (existing) {
      Object.assign(existing.user, candidate.user)
      Object.assign(existing.contact, candidate.contact)
      Object.assign(existing.locale, candidate.locale)
      existing.name = candidate.name
      existing.birthDate = candidate.birthDate
      existing.cpf = candidate.cpf
    }
    return respond({ candidate: existing || candidate })
  }

  return fail(`Rota mock não encontrada: PUT ${pathname}`)
}

export default { get, post, put }
