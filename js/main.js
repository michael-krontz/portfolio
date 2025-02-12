document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close');

    const projectData = {
        freestyle: {
            title: 'Coca-Cola Freestyle',
            description: `
                <h2>Coca-Cola Freestyle</h2>
                <div class="modal-meta">
                </div>
                
                <h3>Project Overview</h3>
                <p>In 2007, I was invited to Coca-Cola's headquarters in Atlanta to work on a top-secret project that would revolutionize beverage dispensing. Inside a secured development room, I encountered a prototype machine that would become the Coca-Cola Freestyle system - the first of their kind ever built.</p>
                <h3>The Challenge</h3>
                <p>My task was to design an intuitive interface for an entirely new beverage experience. This meant creating UI designs for each Coca-Cola product and their various flavors, while maintaining strict brand guidelines across unprecedented combinations - there had never been an orange or strawberry Coke before. The challenge was to make these new flavor innovations feel familiar and authentically Coca-Cola.</p>
                
                <img src="img/projects/freestyle/freestyle-1.jpg" alt="Freestyle Interface">
                <img src="img/projects/freestyle/freestyle-2.jpg" alt="Design Process">
                <img src="img/projects/freestyle/freestyle-3.jpg" alt="Interface Details">
                <img src="img/projects/freestyle/freestyle-4.jpg" alt="Final Results">
            `
        },
        knowhim: {
            title: 'Know Him: Bible Trivia',
            description: `
                <h2>Know Him: Bible Trivia</h2>
                <div class="modal-meta">
                </div>

                <h3>Project Overview</h3>
                <p>I designed and developed Know Him as a passion project, a mobile app that helps users discover Jesus through daily Gospel challenges and interactive trivia. The app creates an engaging yet reverent way to explore the Gospels of Jesus Christ.</p>
                <h3>Key Features</h3>
                <p>Dynamic difficulty levels, multiplayer functionality, real-time leaderboards, and scripture references for each answer. Features a unique discovery system that rewards learning with collectible facts about Jesus' life and ministry. Includes friend networks and daily challenges to encourage consistent engagement with the Gospels.</p>

                <img src="img/projects/knowhim/knowhim-1.png" alt="Know Him Screenshot 1">
                <img src="img/projects/knowhim/knowhim-2.png" alt="Know Him Screenshot 2">
                <img src="img/projects/knowhim/knowhim-3.png" alt="Know Him Screenshot 3">
            `
        },
        toasty: {
            title: 'Toasty Automated Tanning System',
            description: `
                <h2>Toasty Automated Tanning System</h2>
                <div class="modal-meta">
                </div>
    
                <h3>Project Overview</h3>
                <p>I designed an innovative automated system that allows tanning salons to extend their operating hours without additional staffing. The solution combines hardware automation with an intuitive touch interface. I also led brand development and represented Toasty at industry trade shows to drive franchise market adoption.</p>
               
                <h3>Key Features</h3>
                <p>Automated door access control, check-in system, smart room management, and real-time monitoring capabilities for salon owners.</p>
    
                <img src="img/projects/toasty/toasty-1.jpg" alt="Toasty Interface">
                <img src="img/projects/toasty/toasty-2.jpg" alt="Features">
                <img src="img/projects/toasty/toasty-3.jpg" alt="System Overview">
                <img src="img/projects/toasty/toasty-4.png" alt="User Flow">
            `
        },
        stanley: {
            title: 'Stanley Black + Decker XR Experience',
            description: `
                <h2>Stanley Black + Decker XR Experience</h2>
                <div class="modal-meta">
                </div>
    
                <h3>Project Overview</h3>
                <p>I designed an augmented reality experience that allows customers to visualize and compare power tools in real-world contexts. This innovative solution helps customers make more informed purchasing decisions while reducing product returns.</p>
    
                <h3>Key Features</h3>
                <p>Real-time product visualization, interactive 3D models, side-by-side comparison tools, and integrated product specifications.</p>
    
                <img src="img/projects/stanley/sbd1.jpg" alt="Stanley XR Experience">
                <img src="img/projects/stanley/sbd2.jpg" alt="AR Interface">
                <img src="img/projects/stanley/sbd3.jpg" alt="Product Visualization">
                <img src="img/projects/stanley/sbd4.jpg" alt="Xray View">
            `
        }
    };

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.dataset.project;
            const projectContent = projectData[projectId];
            
            if (projectContent) {
                modalBody.innerHTML = projectContent.description;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});