import React from 'react'
import "../css/AppleProject.css"
const AppleProject = () => {
  return (
    <div className='apple-container'>
      <h1>Apple Online Store – Onsite Contractor</h1>
      <div className='exp-container'>
        <h3>Experience Description:</h3>
        <p>I joined Apple as an Onsite Contractor in April 2022, 
            working at the Apple Online Store. At that time, the work-from-home policy was still in effect, 
            but I was informed that one day I would return to the company office. So, 
            I packed up my few pieces of furniture and moved to Austin. 
            I was very excited at that time because having the opportunity to join a large technology company was something I had always dreamed of,
            and I believed that I would definitely enhance my professional skills through this experience.</p>
        <p>Our team's main responsibility is to build applications for internal employees to upload, modify, and delete content on the Apple Online Store. 
            The overall project has already been established, 
            so much of our work involves maintaining existing programs and improving performance. Occasionally, 
            we also develop new APIs based on requirements.</p>
      </div>
      <div className='tech-container'>
        <h3>Technologies Used</h3>
        <ul>
            <li>Spring Boot, Java 17, and Gradle were used for daily development.</li>
            <li>Kafka was utilized as a message distribution tool.</li>
            <li>Cassandra was adopted as the database application, along with Solr Admin for database management.</li>
            <li>AWS EC2 was used for code hosting.</li>
            <li>Splunk served as the log monitoring tool.</li>
            <li>Jenkins was employed for CI/CD management.</li>
            <li>InfraRED was used for project deployment.</li>
            <li>The entire project adopted a microservices strategy, 
                which allows for project responsibility to be divided based on different content and facilitates debugging. 
                However, the downside is that when documentation is not comprehensive, 
                the setup for new employees can be a nightmare.</li>
        </ul>
      </div>
      <div className='Work Responsibilities'>
        <h3>Work Responsibilities</h3>
        <ul>
            <li>Utilizing Thread Pool technology, we achieved a 90% overall increase in upload speed for the project.</li>
            <li>Participated in all phases of the software development lifecycle, including analysis, design, development, integration, and testing.</li>
            <li>Tracked, identified, and resolved bugs in legacy code by using Jenkins and splunk debugging service. 
                Enhanced code quality through strategic fixes and optimizations, ensuring robust performance and maintainability. 
                Updated documentation to reflect changes and support ongoing development. </li>
            <li>Expanded the data service's functionality to deliver enhanced and more precise search capabilities. 
                Addressed and resolved previous data search inaccuracies by implementing targeted bug fixes and improvements.</li>
            <li>Contributed to the development of new support service APIs. Designed, 
                implemented, and tested multiple APIs to enhance functionality and reliability by using Spring framework.</li>
            <li>Collaborated with the front-end team to resolve API data transmission errors, effectively debugging and fixing issues to ensure accurate and reliable data flow.</li>
            <li>Worked with cross-functional teams at Apple Online Store to trace and debug legacy code, helping to pinpoint and address key vulnerabilities and issues.</li>
            <li>Redesigned text display and search functionalities across multiple modules to resolve issues with incorrect results during concurrent operations.</li>
            <li>Utilized Solr Admin and Bitbucket for managing, modifying, adding, and calibrating database content to ensure accuracy and performance.</li>
            <li>Deployed tested versions using InfraRED, facilitating accurate and efficient deployment of fully-tested software.</li>
            <li>Experienced in managing communication and interaction between microservices, including effective debugging to resolve integration issues and ensure smooth operation across distributed systems.</li>
            <li>Used GIT for version control, create and merge branches and pull requests.</li>
            <li>Monitored the error logs using Jenkins and Splunk to manage the issues/project workflow.</li>
        </ul>
      </div>
    </div>
  )
}

export default AppleProject
