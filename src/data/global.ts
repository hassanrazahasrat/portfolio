const data = {
    app: {
        siteName: 'hassanrazahasrat.com',
        siteURL: 'https://hassanrazahasrat.com/',
    },
    personal: {
        email: 'hello@hassanrazahasrat.com',
        phone: '+92-344-248-9654',
        address: 'Karachi, Pakistan',
        socialLinks: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hassanrazahasrat', icon: 'fab fa-linkedin-in' },
            { name: 'Github', url: 'https://www.github.com/hassanrazahasrat', icon: 'fab fa-github' },
            { name: 'Facebook', url: 'https://www.facebook.com/hrh001', icon: 'fab fa-facebook-f' },
            { name: 'Instagram', url: 'https://www.instagram.com/hasan.hasrat', icon: 'fab fa-instagram' },
            { name: 'X', url: 'https://x.com/hasanrazahasrat', icon: 'fab fa-twitter' },
            { name: 'X', url: 'https://upwork.com/fl/hassanrazahasrat/', svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 18px;">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" style="fill: #212529;"></path>
          </svg>` },
        ],
        workExperience: [
            {
                position: 'Senior Software Engineer',
                companyName: 'Dubizzle Labs',
                companyURL: 'https://dubizzlelabs.com/',
                startMonth: 'Jul 2023',
                endMonth: 'Mar 2024',
                description: `<p>As a Senior Software Engineer at Dubizzle, I have been responsible for designing and developing innovative software solutions for our product. During my time at the company, I have been an integral member of our team and have contributed to the success of numerous projects.</p>

                Key responsibilities include:<br>
                
                - Designing and implementing software solutions that meet product requirements and exceed expectations<br>
                - Collaborating with cross-functional teams to identify and resolve complex technical issues<br>
                - Staying up-to-date with the latest developments and trends in my field and incorporating these advancements into my work`,
            }
        ]
    }
}

export function getAppConfig() {
    return data.app;
}

export function getSocialLinks() {
    return data.personal.socialLinks;
}

export function usePersonalData() {
    return data.personal;
}