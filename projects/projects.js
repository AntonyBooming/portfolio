import { fetchJSON, renderProjects } from '../global.js';

const projects = await fetchJSON('../lib/projects.json');

const projectsContainer = document.querySelector('.projects');
projectsTitle.textContent = `${projects.length} Projects`;

const projectsTitle = document.querySelector('.projects-title');
renderProjects(projects, projectsContainer, 'h2');
