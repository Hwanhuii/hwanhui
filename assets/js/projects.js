$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/prometheus.png',
            link: 'https://prometheus-ai.net/',
            title: 'Prometheus',
            demo: false,
            technologies: ['member'],
            description: "Proceed and share various AI projects",
            categories: ['experience']
        },
        {
            image: 'assets/images/OUTTA.png',
            link: 'https://outta.ai/ko/labs',
            title: 'OUTTA AI Laboratory',
            demo: false,
            technologies: ['mentoring & research team'],
            description: "Reviewed the boot camp educational resource and worked as a mentor of the deep learning class",
            categories: ['experience']
        },
        {
            image: 'assets/images/unid.jpg',
            link: 'https://www.instagram.com/2024_uni_d?igsh=MTBhanVkOW94ejJ3dA==',
            title: 'Union of Developing students(Uni-D)',
            demo: false,
            technologies: ['committee'],
            description: "Hosted the university students union hackathon, Uni-DTHON",
            categories: ['experience']
        },
        {
            image: 'assets/images/wfk.jpg',
            link: false,
            title: 'WFK IT Volunteer Corps',
            demo: false,
            technologies: ['member'],
            description: "Conducted education on programming and AI in general at Creative Learners' Academy in Nepal by online",
            categories: ['experience']
        },
        {
            image: 'assets/images/music.jpg',
            link: 'https://www.instagram.com/gugak_yonguk?igsh=MXExdmJvaDA3cnJ2cg==',
            title: 'Yonsei Traditional Music Club',
            demo: false,
            technologies: ['member'],
            description: "Performed at three regular concert as Gayageum and Daeguem player",
            categories: ['experience']
        },
        {
            image: 'assets/images/council.jpg',
            link: false,
            title: 'Student Council',
            demo: false,
            technologies: ['vice precident'],
            description: "Worked with the name '인지상정(human nature)' and hosted various department events",
            categories: ['experience']
        },
        {
            image: 'assets/images/low-dose.png',
            link: false,
            title: 'Low dose CT Denoising',
            demo: false,
            technologies: ['CV', 'denoising'],
            description: "Denoise low-dose CT based on RED-CNN and RDUNet models and compare the results",
            categories: ['project']
        },
        {
            image: 'assets/images/driving.png',
            link: false,
            title: 'AI Driving Guide',
            demo: false,
            technologies: ['CV', 'object-detection'],
            description: "Provide driver guidance about track pedestrians, traffic signs, and lanes",
            categories: ['project']
        },
        {
            image: 'assets/images/fashion.png',
            link: 'https://github.com/abhn/Social-Share-Counts',
            title: 'Fashion recommendation',
            demo: false,
            technologies: ['CV', 'object-detection'],
            description: "Based on Faster R-CNN, recommend fashion that go well with the given item",
            categories: ['project']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}