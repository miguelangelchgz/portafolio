'use strict';

$(function () {
    var model = {
        bio: {
            name: 'Miguel Chacón',
            role: 'Front-End / Android Developer',
            contacts: {
                mobile: '584128712091',
                email: 'miguelangelchgz@gmail.com',
                github: 'https://github.com/miguelangelchgz',
                telegram: 'https://t.me/miguelangelch'
            },
            about: 'Mi nombre es Miguel Angel Chacón, vivo en Maracay, me encuentro a la espera de mi título de Ingeniero de Sistemas, mis áreas favoritas de la programación son el desarrollo web y el desarrollo de aplicaciones móviles para Android',
            welcome: 'Hola soy ',
            skills: ['HTML', 'CSS/SASS', 'JavaScript/ES6', 'JQuery', 'Python', 'Java', 'Android SDK']
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
                image: 'https://raw.githubusercontent.com/miguelangelchgz/resume/master/resume.png'
            }],
            display: function display() {}
        }
    };

    var octopus = {
        init: function init() {
            headerView.init();
            aboutView.init();
            projectView.init();
            // educationView.init();
        },
        getBio: function getBio() {
            return model.bio;
        },
        getContacts: function getContacts() {
            return model.bio.contacts;
        },
        getSkills: function getSkills() {
            return model.bio.skills;
        },
        getJobs: function getJobs() {
            return model.work.jobs;
        },
        getProjects: function getProjects() {
            return model.projects.projects;
        }
    };

    var headerView = {
        init: function init() {
            this.header = $('#header');
            this.headerRow = $('<div></div>').addClass('row');
            this.buttonAbout = $(HTMLbuttonAbout);
            this.buttonContact = $(HTMLbuttonContact);
            this.render();
        },
        render: function render() {
            var title = octopus.getBio().welcome + octopus.getBio().name;
            this.header.append(HTMLheaderTitle.replace('%data%', title));
            this.buttonAbout.click(function (e) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('#about').offset().top
                }, 1000);
            });
            this.buttonContact.click(function (e) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('#contact').offset().top
                }, 1000);
            });
            this.headerRow.append(this.buttonAbout);
            this.headerRow.append(this.buttonContact);
            this.header.append(this.headerRow);
        }
    };

    var aboutView = {
        render: function render() {
            this.aboutColumn.append(HTMLparagraph.replace('%data%', octopus.getBio().about));
            var skills = 'Mis habilidades son: ';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = octopus.getSkills()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var skill = _step.value;

                    skills += skill + ', ';
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.aboutColumn.append(HTMLparagraph.replace('%data%', skills.replace(/.\s$/, '.')));
        },
        init: function init() {
            this.aboutColumn = $('#aboutColumn');
            this.render();
        }
    };

    var projectView = {
        init: function init() {
            this.projects = $('#projects');
            this.render();
        },
        render: function render() {
            var _this = this;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                var _loop = function _loop() {
                    var project = _step2.value;

                    var element = $(HTMLprojectCard.replace('projectTitle', project.title).replace('projectDescription', project.description).replace('%projectLink%', project.link).replace('%projectImage%', project.image));
                    element.hover(function () {
                        element.animate({ marginTop: '-=1%' }, 200);
                    }, function () {
                        element.animate({ marginTop: '0%' }, 200);
                    });
                    _this.projects.append(element);
                };

                for (var _iterator2 = octopus.getProjects()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    };

    octopus.init();
});
//# sourceMappingURL=main.js.map
