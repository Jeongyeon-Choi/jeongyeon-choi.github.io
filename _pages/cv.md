<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #f8f9fa;
            padding: 2rem;
        }

        .cv-container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 2rem 3rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        h2 {
            font-size: 1.8rem;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 0.5rem;
            margin-bottom: 2rem;
        }

        .entry {
            display: flex; /* 연도와 내용을 옆으로 나란히 배치 */
            align-items: flex-start;
            margin-bottom: 2.5rem;
        }

        .year {
            background-color: #9B59B6;
            color: white;
            font-weight: bold;
            font-size: 0.8rem;
            padding: 5px 12px;
            border-radius: 5px;
            margin-right: 2rem;
            flex-shrink: 0; 
        }
        
        .content {
            flex-grow: 1; 
        }
        
        .content h3 {
            font-size: 1.2rem;
            margin: 0 0 0.5rem 0;
        }

        .content .organization {
            color: #555;
            margin: 0 0 1rem 0;
            display: flex;
            align-items: center;
        }
        
        .content .organization i {
            color: #9B59B6; 
            margin-right: 0.5rem;
        }
        
        .content ul {
            padding-left: 20px;
            margin: 0;
            list-style-type: circle; 
        }
        
        .content ul ul {
            list-style-type: square; 
        }
        
        .content li {
            margin-bottom: 0.5rem;
        }
    </style>
</head>
<body>

<div class="cv-container">
    <h2>Education</h2>

    <div class="entry">
        <div class="year">2027</div>
        <div class="content">
            <h3>Master of Arts - Library and Information Science</h3>
            <p class="organization"><i class="fas fa-university"></i> Yonsei University</p>
        </div>
    </div>

    <div class="entry">
        <div class="year">2026</div>
        <div class="content">
            <h3>Master of Library and Information Science</h3>
            <p class="organization"><i class="fas fa-university"></i> Simmons University</p>
            <ul>
                <li>Information Science and Technology Concentration</li>
            </ul>
        </div>
    </div>

    <div class="entry">
        <div class="year">2025</div>
        <div class="content">
            <h3>Bachelor of Arts</h3>
            <p class="organization"><i class="fas fa-university"></i> Yonsei University</p>
            <ul>
                <li>Library and Information Science & Interior Architecture</li>
            </ul>
        </div>
    </div>
    
    <div class="entry">
        <div class="year">2023</div>
        <div class="content">
            <h3>Exchange Program</h3>
            <p class="organization"><i class="fas fa-university"></i> Georgia Institute of Technology</p>
            <ul>
                <li>Architecture</li>
            </ul>
        </div>
    </div>


    <h2>Experience</h2>
    
    <div class="entry">
        <div class="year">Present</div>
        <div class="content">
            <h3>Library Student Worker (Reference)</h3>
            <p class="organization"><i class="fas fa-building"></i> Beatley Library, Simmons University</p>
        </div>
    </div>

    <div class="entry">
        <div class="year">Present</div>
        <div class="content">
            <h3>Research Assistant</h3>
            <p class="organization"><i class="fas fa-building"></i> DataLab, Yonsei University</p>
        </div>
    </div>
    
    <div class="entry">
        <div class="year">2024</div>
        <div class="content">
            <h3>Library Research Crew</h3>
            <p class="organization"><i class="fas fa-building"></i> Yonsei University Library</p>
        </div>
    </div>

</div>

</body>
</html>
