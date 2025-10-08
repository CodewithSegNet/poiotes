import { ScrollArea } from './ui/scroll-area';

export function PrivacyPolicy() {
  return (
    <ScrollArea className="h-[70vh] w-full pr-4">
      <div className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-2xl mb-4 text-yellow-300">Privacy Policy</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Effective Date:</strong> August 14, 2025<br />
            <strong>Last Updated:</strong> August 14, 2025
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">1. Introduction</h3>
          <p className="text-muted-foreground">
            Poietes Limited ("we," "our," or "us") is committed to protecting your privacy and personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
            our website, use our services, or interact with us in connection with our software development and 
            technology consulting services.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">2. Information We Collect</h3>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="text-base mb-2 text-foreground">2.1 Personal Information</h4>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information and job title</li>
                <li>Project requirements and technical specifications</li>
                <li>Communication preferences</li>
                <li>Payment and billing information</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base mb-2 text-foreground">2.2 Technical Information</h4>
              <p>When you visit our website, we automatically collect:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Website usage patterns and preferences</li>
              </ul>
              <p className="mt-2 text-sm">
                <em>Note: We do not currently use cookies or similar tracking technologies on our website.</em>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">3. How We Use Your Information</h3>
          <div className="text-muted-foreground space-y-2">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide and improve our software development services</li>
              <li>Communicate with you about projects and services</li>
              <li>Process payments and manage billing</li>
              <li>Send project updates and technical documentation</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Improve our website and user experience</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">4. Information Sharing and Disclosure</h3>
          <div className="text-muted-foreground space-y-3">
            <p>We do not sell, trade, or rent your personal information. We may share your information only in these circumstances:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>With your explicit consent</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">5. Data Security</h3>
          <div className="text-muted-foreground space-y-2">
            <p>We implement appropriate security measures to protect your information:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure development practices and code reviews</li>
              <li>Regular backup and disaster recovery procedures</li>
            </ul>
            <p className="mt-3">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">6. Data Retention</h3>
          <p className="text-muted-foreground">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
            policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related data 
            may be retained for up to 7 years for legal and business purposes.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">7. Your Rights</h3>
          <div className="text-muted-foreground space-y-2">
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at Poietesltd@gmail.com.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">8. Website Usage Information</h3>
          <div className="text-muted-foreground space-y-2">
            <p>We currently collect minimal technical information about website visits, such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Basic server logs for security and performance monitoring</li>
              <li>General usage statistics to improve our website</li>
            </ul>
            <p className="mt-2 text-sm bg-muted/20 p-3 rounded-lg">
              <strong>Note:</strong> We do not currently use cookies, tracking pixels, or other persistent tracking technologies on our website. 
              Should we implement such technologies in the future, we will update this policy and provide appropriate notice.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">9. Third-Party Services</h3>
          <p className="text-muted-foreground">
            Our website and services may contain links to third-party websites or integrate with third-party services. 
            This Privacy Policy does not apply to these external services. We recommend reviewing the privacy policies 
            of any third-party services you interact with.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">10. International Data Transfers</h3>
          <p className="text-muted-foreground">
            Your information may be transferred to and processed in countries other than your own. When we transfer 
            personal information internationally, we ensure appropriate safeguards are in place to protect your data 
            in accordance with applicable privacy laws.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">11. Children's Privacy</h3>
          <p className="text-muted-foreground">
            Our services are not intended for children under 18 years of age. We do not knowingly collect personal 
            information from children under 18. If we become aware that we have collected personal information from 
            a child under 18, we will take steps to delete such information.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">12. Changes to This Policy</h3>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by 
            posting the new policy on our website and updating the "Last Updated" date. Your continued use of our 
            services after such changes constitutes acceptance of the updated policy.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">13. Governing Law</h3>
          <p className="text-muted-foreground">
            This Privacy Policy is governed by the laws of the Federal Republic of Nigeria. Any disputes arising 
            from this policy will be resolved in the courts of the Federal Capital Territory, Abuja, Nigeria.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-yellow-300">14. Contact Information</h3>
          <div className="text-muted-foreground space-y-2">
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="bg-muted/20 p-4 rounded-lg mt-3">
              <p><strong>Poietes Limited</strong></p>
              <p>FCT Abuja, Nigeria</p>
              <p>Email: Poietesltd@gmail.com</p>
              <p>Phone: +234 807 778 4848</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}