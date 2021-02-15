import React from "react";
import styled from "styled-components"
import { PageContainer, SectionLeft, Row } from "../components/layout"
import PageBase from "../components/pageBase"
import Header from "../components/header"
import Spacer from "../components/spacer"
import BulletList from "../components/bulletList";
import { Heading, Subheading } from "../components/headings";
import Footer from "../components/footer";
import Aside from "../components/aside";
import Link from "../components/link";

const Text = styled.p`
  font-size: 1.1em;
  margin: 10px 0px;
`

export default function SCA() {
	return <PageBase title="SCA">
		<PageContainer>
			<Header pink content={'About the Student Cross Association'} src={'/support-square.jpg'} alt={'two women hugging'}></Header>

			<Row>
				<SectionLeft width={70}>
					<Aside>
						The Student Cross Association (SCA) is a registered charity (charity number 1019313) which exists to raise and disburse funds to needy pilgrims to enable them to walk Student and Pilgrim Cross.

					For further information <Link mailto="YXNzb2NpYXRpb25Ac3R1ZGVudGNyb3NzLm9yZy51aw==">contact the SCA</Link>.
					</Aside>
					<Spacer size={30}></Spacer>
					<Subheading>The SCA's aims</Subheading>

					<BulletList>
						<li>
							To raise funds for grants or loans through individual donations, Student and Pilgrim Cross merchandise, and other appropriate means
							</li>
						<li>
							To distribute grants or loans to needy pilgrims (low-waged and unwaged) to help them to take part in Student and Pilgrim Cross
						</li>
						<li>
							To ensure that all grants or loans are properly spent and accounted for
						</li>
						<li>
							To report back to the Student and Pilgrim Cross Annual General Meeting on allocation and use of grants or loans
						</li>
						<li>
							To maintain the Student Cross Association web page
						</li><br />
					</BulletList>

					<Link href='/sca-constitution.pdf'>The SCA constitution</Link>

					<Subheading>Committee membership</Subheading>
					<Text>SCA committee members are (re-)elected every year at the Student Cross Association Annual General Meeting in Walsingham. The current Student Cross Association Committee consists of:</Text>
					<BulletList>
						<li>
							5 Trustees
							</li>
						<li>
							1 Honorary Treasurer
						</li>
						<li>
							1 representative from each Leg of Student and Pilgrim Cross
						</li>
						<li>
							Up to 5 Other Elected Members (OEMs)
						</li>
						<li>
							Current and previous General Organising Director of Student and Pilgrim Cross
						</li><br />
					</BulletList>
					<Text>The Chair and Vice-Chair of the Committee are elected by the SCA Committee from within its own body every three years. The Secretary of the Committee is elected by the SCA Committee from within its own body every five years. The Treasurer and Secretary are elected by the SCA committee every five years. Leg Reps are elected by their individual Legs every year. OEMs and Trustees are elected by the general body of Student and Pilgrim Cross at the SCA AGM.</Text>
					<Subheading>SCA Officers</Subheading>
					<Text>Chair: Jonathan Riley (elected to 2021)<br />
					Vice-Chair: Andrew Wilson (elected to 2021)<br />
					Treasurer: Clare Byrne (elected to 2024)<br />
					Secretary: Michele Crawford (elected to 2021)</Text>
					<Subheading>How can someone join the SCA Committee?</Subheading>
					<Text>
						Anyone with an interest in or expertise in fundraising, marketing, merchandising, design or volunteering for charity might like to consider serving on the SCA Committee. There are two main ways to serve on the SCA Committee:
					</Text>
					<BulletList>
						<li>
							as a Leg Rep
						</li>
						<li>
							as an OEM (Other Elected Member)
						</li>
						<br />
					</BulletList>
					<Text>SCA Leg Reps are responsible for being the contact point between their Leg and the SCA. This includes:</Text>
					<BulletList>
						<li>
							attending SCA meetings
						</li>
						<li>
							making sure that key decisions made by the SCA are communicated back to the Leg (including information about available grants)
						</li>
						<li>
							helping Leg leaders to ensure that they complete and return their annual statement of how SCA grants have been spent
						</li>
						<li>
							publicising the work of the SCA to the Leg
						</li>
						<br />
					</BulletList>
					<Text>SCA Leg Reps are elected every year by the Leg in its individual Leg AGM.</Text>

					<Subheading>Current Leg Reps:</Subheading>
					<Text>
						Easter - Gwilym Stone<br />
					Ely - Judith Gibbons<br />
					Essex - Alison Gelder<br />
					Kettering - Paul Wilkinson<br />
					London - Sarah Browncross<br />
					Midland - Emma Castle<br />
					Northern - Gemma Webb<br />
					Oxford - Brian Roberts<br />
					Peg - Helen Vale<br />
					Wells - Andy Wilson<br />
					Wensum - Maria Levesley<br />
					</Text>
					<Text>OEMs (Other Elected Members) are elected every year at the SCA AGM. OEMs have full voting rights. To stand for election as an OEM please submit your name, with the name of a proposer and a seconder, to the Chair by midday on the day of the SCA AGM (usually Holy Saturday). A nomination can be submitted by:</Text>
					<BulletList>
						<li>
							emailing it to the Chair by the Thursday before Palm Sunday
						</li>
						<li>
							adding it to the nomination list which will be displayed on the Pilgrim Bureau noticeboard (alongside the SCA AGM agenda) at Walsingham
						</li>
						<li>
							giving it to your Leg SCA Rep to pass to the Chair
						</li>
						<li>
							giving it to the Chair in person at Walsingham
						</li>
						<br />
					</BulletList>
					<Text>(Note: please make sure that you and your proposer will be present in person at the SCA AGM, as in the event of a contested election both you and your proposer will be required to speak.)</Text>

					<Subheading>Current OEMs:</Subheading>
					<Text>
						Jacque Ryan<br />
					Ed Snape<br />
					Jack Woodruff
					</Text>

					<Subheading>Currently co-opted to the SCA:</Subheading>
					<Text>
						Jonathan Riley (Chair)<br />
					Clare Byrne (Treasurer)<br />
					Craig Ince (National Director 2020-21)
					</Text>
					<Subheading>Our patrons</Subheading>
					<Text>
						Mr Chris Bain, Former Director, CAFOD<br />
					Professor Rev Timothy Gorringe, Professor Emeritus of Theology, University of Exeter<br />
					Most Rev Bishop Malcolm McMahon OP, Archbishop of Liverpool<br />
					Most Rev Timothy Radcliffe OP, Former Master of the Order of Preachers<br />
					Rt Rev Bishop Alan Williams, Bishop of Brentwood
					</Text>
					<Subheading>SCA AGM</Subheading>
					<Text>The SCA AGM is normally held every year at Easter, on Holy Saturday in Walsingham during the Student and Pilgrim Cross AGM. The SCA AGM Agenda is available from Leg Reps and is displayed on the Pilgrim Bureau noticeboard from Good Friday.<br /><br />

					As with the Student and Pilgrim Cross AGM, an item for discussion at the SCA AGM can be proposed by submission to the SCA Chair, by midday on the day of the SCA AGM. The Chair will determine if the item can be added to the agenda. The agenda will include a standing item listing the positions available for election at the SCA AGM.<br /><br />

					Normally, the SCA AGM each year presents and approves the Annual Accounts for the previous calendar year. However, as no AGM was held at Easter 2020, due to Covid restrictions, the Annual Accounts for 2019 have been accepted by the SCA Trustees on behalf of the SCA.</Text>

					<Link href='/sca-treasurer-report-2020.pdf'>Treasurer's Report 2020</Link>
					<Link href='/sca-annual-accounts-2019.pdf'>SCA Annual Accounts 2019</Link>

					<Subheading>Trustees</Subheading>

					<Text>The Trustees of the SCA carry the ultimate responsibility for ensuring that all legal and financial aspects of the Association's work are in order, and that the SCA's work is carried out in accordance with its Constitution, and in accordance with Charity Commission's guidelines and other legal guidelines.<br /><br />

					Up to 5 Trustees can serve at any one time and may serve for up to 5 years. After 5 years they may stand for re-election at the annual SCA AGM in Walsingham, or choose to stand down and a new Trustee elected. As the position of Trustee carries both legal and financial responsibility and liability, it is essential that anyone wishing to serve as a Trustee has a thorough knowledge and understanding of the remit and processes of the Association and charity law also. It is strongly recommended that anyone interested in becoming a future Trustee first takes the opportunity to serve on the Committee as a Leg Rep or OEM so that they can gain an intimate knowledge and understanding of how the committee and the Association function.<br /><br />

					If you are interested in finding out more about the Trustee role, please contact the SCA Chair</Text>

					<Subheading>Current Trustees</Subheading>
					<Text>
						Michele Crawford (elected to 2023)<br />
					Paul Fay (elected to 2021)<br />
					Una Moran (elected to 2021)<br />
					Damien Sweeney (elected to 2023)<br />
					Murray White (elected to 2023)
					</Text>

					<Subheading>When does the SCA Committee meet?</Subheading>
					<Text>
						The SCA Committee meets a minimum of twice per year. The first meeting is the SCA AGM. This is normally held at the same time and place as the Student and Pilgrim Cross AGM (usually in the Pilgrim Bureau in Walsingham each Holy Saturday). The second meeting is held in Walsingham every Holy Saturday, usually after the Student and Pilgrim Cross AGM. The third meeting is usually held in October. This third meeting is where most of the SCA's main business is discussed and decisions made, including how much money is available for disbursement to Legs in grants for the following Easter.
					</Text>

					<Subheading>Minutes of recent SCA meetings:</Subheading>

					<Link href='/sca-minutes-oct2019.pdf'>October 2019 committee meeting</Link>
					<Link href='/sca-minutes-easter2019.pdf'>Easter 2019 AGM and committee meeting</Link>
					<Text>All members of Student and Pilgrim Cross, regardless of whether or not they are on the SCA Committee, can be invited to attend SCA meetings as an observer and/or to propose items for the agenda. However, as physical space can sometimes be limited, if you would like to attend an SCA meeting please contact the Chair in advance to let them know you would like to come.</Text>

					<Spacer size={50}></Spacer>


					<Link href='/fundraising'>Find out more about regular giving and fundraising</Link>
					<Link href='/sca-committee'>Find out more about SCA reports, committee and contacts</Link>

				</SectionLeft>
			</Row>
			<Footer></Footer>
		</PageContainer>
	</PageBase >
}