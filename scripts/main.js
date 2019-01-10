$(() => {
    let model = {
        bio: {
            name: 'Miguel Chacón',
            role: 'Front-End / Android Developer',
            contacts: {
                mobile: '584128712091',
                email: 'miguelangelchgz@gmail.com',
                github: 'https://github.com/miguelangelchgz',
                telegram: 'https://t.me/miguelangelch',
            },
            about: 'Mi nombre es Miguel Angel Chacón, vivo en Maracay, me encuentro a la espera de mi título de Ingeniero de Sistemas, mis áreas favoritas de la programación son el desarrollo web y el desarrollo de aplicaciones móviles para Android',
            welcome: 'Hola soy ',
            skills: ['HTML', 'CSS/SASS','JavaScript/ES6','JQuery','Python',  'Java', 'Android SDK']
        },
        projects: {
            projects: [{
                title: 'Telearagua App',
                link: 'https://github.com/miguelangelchgz/Telearagua',
                description: 'Aplicación de noticias desarrollada en Java para el sistema operativo Android.',
                image: 'https://raw.githubusercontent.com/miguelangelchgz/Telearagua/master/all.png'
            }, {
                title: 'Página Curriculum',
                link: 'https://miguelangelchgz.github.io/resume/',
                description: 'Página Curriculum desarrollada siguiendo el patrón de arquitectura MVC.',
                image: 'https://raw.githubusercontent.com/miguelangelchgz/resume/master/resume.png'
            }, {
                title: 'Proyecto Ejemplo',
                link: '2010',
                description: 'Description',
                image: 'https://raw.githubusercontent.com/miguelangelchgz/portafolio/master/images/thumbnail.gif'
            }],
            display() {

            }
        }
    }

    let octopus = {
        init() {
            headerView.init();
            aboutView.init();
            projectView.init();
            // educationView.init();
        },
        getBio() {
            return model.bio;
        },
        getContacts() {
            return model.bio.contacts;
        },
        getSkills() {
            return model.bio.skills;
        },
        getJobs() {
            return model.work.jobs;
        },
        getProjects() {
            return model.projects.projects;
        }
    }

    let headerView = {
        init() {
            this.header = $('#header');
            this.headerRow = $('<div></div>').addClass('row');
            this.buttonAbout = $(HTMLbuttonAbout);
            this.buttonContact = $(HTMLbuttonContact);
            this.render();
        },
        render() {
            let title = octopus.getBio().welcome + octopus.getBio().name;
            this.header.append(HTMLheaderTitle.replace('%data%', title));
            this.buttonAbout.click((e) => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('#about').offset().top
                }, 1000);

            });
            this.buttonContact.click((e) => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('#contact').offset().top
                }, 1000);

            });
            this.headerRow.append(this.buttonAbout);
            this.headerRow.append(this.buttonContact);
            this.header.append(this.headerRow);
        }
    }

    let aboutView = {
        render() {
            this.aboutColumn.append(HTMLparagraph.replace('%data%',octopus.getBio().about));
            let skills = 'Mis habilidades son: '
            for(let skill of octopus.getSkills()){
                skills += skill + ', ' ;
            }
            this.aboutColumn.append(HTMLparagraph.replace('%data%',skills.replace(/.\s$/,'.')));
        },
        init() {
            this.aboutColumn = $('#aboutColumn');
            this.render();
        }
    };


    let projectView = {
        init() {
            this.projects = $('#projects');
            this.render();
        },
        render() {
            for (let project of octopus.getProjects()) {
                let element = $(HTMLprojectCard.replace('projectTitle', project.title).replace('projectDescription', project.description).replace('%projectLink%', project.link).replace('%projectImage%', project.image));
                element.hover(

                    () => {
                        element.animate({marginTop: '-=1%'},200);
                    },() => {
                        element.animate({marginTop: '0%'},200);
                    }
                );
                this.projects.append(element);
            }


        }
    }


    octopus.init();
});
