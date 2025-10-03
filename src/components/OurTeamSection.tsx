import React from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupIcon from '@mui/icons-material/Group';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  experience: string;
  specialties: string[];
  avatar: string;
  bgColor: string;
}

const OurTeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Kevin Liu",
      title: "Founder & Lead Educator",
      bio: "• Bachelor's degree in Electrical Engineering from Shanghai Jiao Tong University\n• Master's degree of Business Administration (BiMBA) from Peking University\n• Second prize in Physics and third prize in Mathematics at China National High School Olympiad competitions\n\n• Specializes in junior and senior high school levels\n• Proficient in SAT/PSAT Math, AP and IB system Physics, Chemistry, and Calculus\n• Over 10,000 hours of teaching and tutoring experience\n• Experience in both group classes and one-on-one instruction\n\n• Emphasizes cultivating study habits and nurturing interests\n• Focuses on logical thinking and motivating students to face challenges\n• Provides dual-language teaching in English and Chinese\n\n• Resides in Houston, Texas, USA\n• Mentored hundreds of students from diverse regions worldwide\n• Students admitted to Stanford, Princeton, Columbia, Johns Hopkins, Harvey Mudd, Cornell, Rice, UCLA, UC Berkeley, and more",
      experience: "10,000+ Hours",
      specialties: ["SAT/PSAT Math", "AP Physics", "IB Physics", "AP Chemistry", "AP Calculus"],
      avatar: "/photos/kevin_liu.png",
      bgColor: "#1976d2"
    },
    {
      id: 2,
      name: "Jocelyn C. Palmer",
      title: "College Admissions Consultant",
      bio: "• Founder of Cornerstone Prep, leading all college admissions consulting services\n• Former senior equity research analyst on Wall Street, specializing in non-ferrous metals stocks\n• Extensive experience teaching SAT prep, reading, and writing enrichment to high school students\n• Background in editing services for college and graduate school applicants\n\n• Bachelor of Arts in English from Smith College\n• Master of Business Administration in Finance and Marketing from Columbia University\n• Successfully mentored students admitted to top U.S. universities and programs, including Barnard, UC Berkeley, Boston University, Brown, Columbia, Cornell, Duke, University of Michigan-Ann Arbor, Northwestern, Northeastern, NYU, Wake Forest, and more\n\n• College admissions consulting from 9th grade through senior year\n• Specialized guidance in essay brainstorming, drafting, and editing (up to 11 schools)\n• Expertise in Common App preparation, resume building, and mock interviews\n• Advises on high school course selection, SAT/ACT planning, extracurricular development, and summer program choices\n• Strong track record with students applying to business, engineering, medicine, music, and writing programs\n\n• Emphasizes authenticity, dedication, and perseverance throughout the admissions journey\n• Guides students in developing their unique \"voice\" and leadership qualities\n• Focuses on helping students demonstrate initiative, teamwork, and service\n• Known for mentoring students to craft compelling and engaging application essays\n\n• Resides on Long Island, New York; previously raised two daughters in Manhattan private schools\n• Deeply invested in student success, mentoring applicants across liberal arts, business, engineering, and music disciplines\n• Students have earned placements in top programs nationwide, including the Curtis Institute of Music and the University of Chicago",
      experience: "15+ Years",
      specialties: ["College Admissions", "Essay Writing", "SAT/ACT Prep", "Common App", "Mock Interviews"],
      avatar: "/photos/jocelyn.jpg",
      bgColor: "#388e3c"
    },
    {
      id: 3,
      name: "Victoria Xian",
      title: "English & Test Prep Specialist",
      bio: "• Over 20 years of experience in English teaching and international curriculum training\n• Former teaching supervisor and core faculty member at several leading international education institutions\n• Extensive expertise in teaching and academic research\n\n• Specializes in standardized test preparation, including TOEFL, IELTS, SAT, ACT, GRE, and GMAT\n• Experienced in guiding students through entrance exams for international schools (BISG, AISG, UISG, SCIE, HFI)\n• Proficient in international curricula such as AP Language and Composition, IB, and A-level\n• Many students achieved top results: perfect score of 5 in AP Language and Composition, SAT Reading scores of 750+, and TOEFL scores of 115+\n\n• Committed to helping students build strong foundations in language learning\n• Focuses on improving test-taking strategies and analytical thinking\n• Encourages students to develop confidence and achieve excellence through personalized guidance\n\n• Has trained and mentored students across diverse international backgrounds\n• Guided students to success in standardized tests and admission to top schools worldwide",
      experience: "20+ Years",
      specialties: ["TOEFL/IELTS", "SAT/ACT", "AP Language", "IB English", "GRE/GMAT"],
      avatar: "/photos/victoria_xian.jpg",
      bgColor: "#f57c00"
    }
  ];

  return (
    <Box 
      id="our-team" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: '#ffffff',
        width: '100%'
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 4, md: 6 } }}>
          <GroupIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2 }} />
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'primary.main'
            }}
          >
            Our Team
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, md: 6 },
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          {teamMembers.map((member) => (
            <Card 
              key={member.id}
              sx={{ 
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: 3,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease-in-out',
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: { xs: 3, md: 4 },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  {/* Teacher Photo and Basic Info */}
                  <Box 
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: { md: '280px' },
                      flex: { md: '0 0 280px' },
                    }}
                  >
                    <Avatar 
                      src={member.avatar.startsWith('/') ? member.avatar : undefined}
                      sx={{ 
                        width: { xs: 120, md: 150 },
                        height: { xs: 120, md: 150 },
                        bgcolor: member.bgColor,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        mb: 2,
                        border: '4px solid white',
                        boxShadow: 2,
                        // Add this line to adjust the image position inside the Avatar:
                        '& .MuiAvatar-img': {
                          objectPosition: member.id === 3 ? 'center 20%' : 'center 35%' // Lower position for Victoria Xian
                        }
                      }}
                    >
                      {!member.avatar.startsWith('/') ? member.avatar : ''}
                    </Avatar>
                    
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      fontWeight="bold"
                      sx={{ mb: 1, color: member.bgColor }}
                    >
                      {member.name}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ mb: 2, fontStyle: 'italic', fontSize: '1rem', fontWeight: 'bold' }}
                    >
                      {member.title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <StarIcon sx={{ color: '#f57c00', fontSize: 20 }} />
                      <Typography variant="body2" fontWeight="bold" color={member.bgColor}>
                        {member.experience}
                      </Typography>
                      <VerifiedIcon sx={{ color: '#388e3c', fontSize: 20 }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {member.specialties.map((specialty, idx) => (
                        <Chip
                          key={idx}
                          label={specialty}
                          size="small"
                          sx={{ 
                            bgcolor: `${member.bgColor}20`,
                            color: member.bgColor,
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Bio Content */}
                  <Box 
                    sx={{ 
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <SchoolIcon sx={{ color: member.bgColor, mr: 1, fontSize: 28 }} />
                      <Typography 
                        variant="h6" 
                        fontWeight="bold"
                        sx={{ color: member.bgColor }}
                      >
                        Professional Background
                      </Typography>
                    </Box>
                    
                    {member.id === 1 ? (
                      // Special formatting for Kevin Liu (first member)
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Education & Achievements
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Bachelor's degree in Electrical Engineering from Shanghai Jiao Tong University<br/>
                            • Master's degree of Business Administration (BiMBA) from Peking University<br/>
                            • Second prize in Physics and third prize in Mathematics at China National High School Olympiad competitions
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Teaching Expertise
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Specializes in junior and senior high school levels<br/>
                            • Proficient in SAT/PSAT Math, AP and IB system Physics, Chemistry, and Calculus<br/>
                            • Over 10,000 hours of teaching and tutoring experience<br/>
                            • Experience in both group classes and one-on-one instruction
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Teaching Philosophy
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Emphasizes cultivating study habits and nurturing interests<br/>
                            • Focuses on logical thinking and motivating students to face challenges<br/>
                            • Provides dual-language teaching in English and Chinese
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Location & Impact
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Resides in Houston, Texas, USA<br/>
                            • Mentored hundreds of students from diverse regions worldwide<br/>
                            • Students admitted to Stanford, Princeton, Columbia, Johns Hopkins, Harvey Mudd, Cornell, Rice, UCLA, UC Berkeley, and more
                          </Typography>
                        </Box>
                      </Box>
                    ) : member.id === 2 ? (
                      // Special formatting for Jocelyn C. Palmer (second member)
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Professional Background
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Founder of Cornerstone Prep, leading all college admissions consulting services<br/>
                            • Former senior equity research analyst on Wall Street, specializing in non-ferrous metals stocks<br/>
                            • Extensive experience teaching SAT prep, reading, and writing enrichment to high school students<br/>
                            • Background in editing services for college and graduate school applicants
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Education & Achievements
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Bachelor of Arts in English from Smith College<br/>
                            • Master of Business Administration in Finance and Marketing from Columbia University<br/>
                            • Successfully mentored students admitted to top U.S. universities and programs, including Barnard, UC Berkeley, Boston University, Brown, Columbia, Cornell, Duke, University of Michigan-Ann Arbor, Northwestern, Northeastern, NYU, Wake Forest, and more
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Consulting Expertise
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • College admissions consulting from 9th grade through senior year<br/>
                            • Specialized guidance in essay brainstorming, drafting, and editing (up to 11 schools)<br/>
                            • Expertise in Common App preparation, resume building, and mock interviews<br/>
                            • Advises on high school course selection, SAT/ACT planning, extracurricular development, and summer program choices<br/>
                            • Strong track record with students applying to business, engineering, medicine, music, and writing programs
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Approach & Philosophy
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Emphasizes authenticity, dedication, and perseverance throughout the admissions journey<br/>
                            • Guides students in developing their unique "voice" and leadership qualities<br/>
                            • Focuses on helping students demonstrate initiative, teamwork, and service<br/>
                            • Known for mentoring students to craft compelling and engaging application essays
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Location & Impact
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Resides on Long Island, New York; previously raised two daughters in Manhattan private schools<br/>
                            • Deeply invested in student success, mentoring applicants across liberal arts, business, engineering, and music disciplines<br/>
                            • Students have earned placements in top programs nationwide, including the Curtis Institute of Music and the University of Chicago
                          </Typography>
                        </Box>
                      </Box>
                    ) : member.id === 3 ? (
                      // Special formatting for Victoria Xian (third member)
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Professional Background
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Over 20 years of experience in English teaching and international curriculum training<br/>
                            • Former teaching supervisor and core faculty member at several leading international education institutions<br/>
                            • Extensive expertise in teaching and academic research
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Teaching Expertise
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Specializes in standardized test preparation, including TOEFL, IELTS, SAT, ACT, GRE, and GMAT<br/>
                            • Experienced in guiding students through entrance exams for international schools (BISG, AISG, UISG, SCIE, HFI)<br/>
                            • Proficient in international curricula such as AP Language and Composition, IB, and A-level<br/>
                            • Many students achieved top results: perfect score of 5 in AP Language and Composition, SAT Reading scores of 750+, and TOEFL scores of 115+
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Teaching Philosophy
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Committed to helping students build strong foundations in language learning<br/>
                            • Focuses on improving test-taking strategies and analytical thinking<br/>
                            • Encourages students to develop confidence and achieve excellence through personalized guidance
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold" sx={{ color: member.bgColor, mb: 1 }}>
                            Location & Impact
                          </Typography>
                          <Typography variant="body1" component="div" sx={{ pl: 2 }}>
                            • Has trained and mentored students across diverse international backgrounds<br/>
                            • Guided students to success in standardized tests and admission to top schools worldwide
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      // Regular formatting for other team members
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          lineHeight: 1.7,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          color: 'text.primary'
                        }}
                      >
                        {member.bio}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeamSection; 