import React from 'react';
import {
  Document,
  Font,
  Page,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 14,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Subtitle = ({ children, ...props }) => (
  <Text style={styles.subtitle} {...props}>
    {children}
  </Text>
);

export default () => (
  <Document>
    <Page style={styles.body} wrap>
      <Text style={styles.header} fixed>
       Creazione Group 
      </Text>
      <Text style={styles.title}>APPOINTMENT LETTER</Text>
      <Subtitle>
       
     {
        ` Emp. ID: EMPCG0111                                                    Date:28/07/222
        Designation: Back Office Executive
        Department: Operation
        Address: 12, Uppar Haranathpur Road,
        Tetultala, Bhadra kali,
        Uttarpara, Hooghly – 712232`
     }
      </Subtitle>
      <Text style={styles.text} >
        {
           `Dear Mr. Surajit Roy,
         With reference to your application, personal interview & further discussion held with you, we are pleased to appoint you in the position of Back Office Executive  in our company with a joining date of 18 th October 2021 on the following terms & conditions:     `
        }
      </Text>
      <Text style={styles.text}>
      1. This could be considered as appointment cum confirmation of your service, which shall be
            effective from 1 st June 2022.
      </Text>
      <Text style={styles.text}>
      2. You will initially join at Kolkata office with Sub Branch _____; however you may be required to
            serve the company in any place within/ outside the State, if necessary.
      </Text>
      <Text style={styles.text}>
      3. The annual Gross CTC for this position will be Rs. 3,60,000/- (Rupees Three Lakhs Sixty Thousand
            only) subject to statutory deductions as applicable.
      </Text>
      <Text style={styles.text}>
      3. The annual Gross CTC for this position will be Rs. 3,60,000/- (Rupees Three Lakhs Sixty Thousand
            only) subject to statutory deductions as applicable.
      </Text>
      <Text style={styles.text}>
      4. You will be on probation period for 6(six) months from the date of joining, which may be extended
        at the sole discretion of Management. Unless confirmed in writing, the company reserves the right
        to terminate your candidature at any point of time, without stating any reasons during this
        probation period.
      </Text>
      <Text style={styles.text}>
      5. You are expected to remain in duty throughout the business/working hours of the organization.
      </Text>
      <Text style={styles.text}>
      6. You are liable to be transferred from one job to another job, or from one department to another
department or from one establishment to another establishment or from one country to another
if required by the Management. You shall do such other work, which will be assigned to you by the
Management from time to time. Any such changes in assignment or transfer will not automatically
entitled to any additional remuneration, allowance, compensation, or other sum in respect
thereof.
      </Text>
      <Text style={styles.text}>
      7. During the continuing of tenure, your service may be terminated at any time with assigning proper
& valid reason whatsoever by either party giving the other 30 day’s notice in writing or 30 day’s
fees/salary in lieu thereof vice-versa.
      </Text>
      <Text style={styles.text}>
      8. You are requested to produce the following documents on the day of joining for our records:
a. Adhaar card
b. Pan card
c. Voter id card
d. Front page of bank passbook
e. All documents of 10 th
f. All Documents of 12 th
g. Highest qualification result / certificate.
h. Previous company’s supportive documents
i. Pay slip of previous organization
j. Blood group report
k. Current Address proof, if not residing temporarily at permanent address.
l. 1 copy of a formal photo.
m. Medical fitness certificate from a recognized doctor

       </Text>

       <Text style={styles.text}>
       If any declaration given or furnished by you to the company in any document submitted for
employment proves to be false or if you have willfully suppressed any material information, you will
be liable to be terminated without notice.
      </Text>
      <Text style={styles.text}>
      9. As substantial amount of technical and other information will be obtained by you or will be
available to you, you will appreciate that any information so obtained must not be communicated
directly or indirectly to any person, firm or company. You will therefore be agreed to sign
agreement of Non – disclosure / Confidentiality.
The Offer Letter is enclosed in duplicate and you are requested to sign the duplicate copy of the
same.
      </Text>
      <Text style={styles.text}>
      We have pleasure in welcoming you and looking forward to mutually meaningful association.
      </Text>
      <Text style={styles.text}>
      For Creazione Group Of Companies
      </Text>
      <Text style={styles.text}>
      {`
         …………………………………………
             Avishek Maity
              CEO & MD
      `}
      </Text>
        <Text style={styles.text} >
        I have read, understood and accepted the terms and conditions of employment. As desired, I will
join the company’s services with effect from…………………………
        </Text>
        <Text style={styles.text}>
        Signature & Date :
        </Text>
      {/* <Subtitle break>
      
      </Subtitle> */}
      {/* <Image
        style={styles.image}
        src="https://panampost.com/wp-content/uploads/don-quijote-lessons.jpg"
      /> */}
      <Text style={styles.text}>
       
       
      </Text>
      <Text style={styles.text}>
       
      </Text>
      <Text style={styles.text}>
        
      </Text>
      <Text style={styles.text}>
        
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);