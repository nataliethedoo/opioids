import pandas as pd
import numpy as np 

def processdata(age, income, sex):
	HCUP = pd.read_csv('./static/data/HCUP.csv',header=None)

	BaseLine_ED = HCUP.iat[0,0]
	dict_age_to_HCUP = {2:2,3:2,4:2,5:2,6:3,7:3,8:3,9:3,10:4,11:4,12:5}
	dict_income_to_HCUP = {1:1,2:1,3:2,4:3,5:4}

	ED_age = {2:121,3:423.7,4:187,5:84.8}
	weight_ED_age = .3
	ED_sex = {1:222.9,2:197.2}
	weight_ED_sex = .2
	ED_income = {1:248.7,2:208.3,3:171,4:115.5}
	weight_ED_income = .2

	BaseLine_IP = HCUP.iat[12,0]
	IP_age = {1:48.3,2:81.4,3:385.2,4:319.3,5:309.5}
	weight_IP_age = .1
	IP_sex = {1:235.6,2:274.7}
	weight_IP_sex = .05
	IP_income = {1:322.8,2:240.9,3:201.4,4:120.6}
	weight_IP_income = .2

	HCUP_age = dict_age_to_HCUP[age]
	HCUP_income = dict_income_to_HCUP[income]
	print type(BaseLine_ED)
	ED_HCUP_score = weight_ED_age*(ED_age[int(HCUP_age)]/BaseLine_ED-1) + weight_ED_sex*(ED_sex[sex]/BaseLine_ED-1)+weight_ED_income*(ED_income[int(HCUP_income)]/BaseLine_ED-1)
	IP_HCUP_score = weight_IP_age*(IP_age[int(HCUP_age)]/BaseLine_IP-1) + weight_IP_sex*(IP_sex[sex]/BaseLine_IP-1)+weight_IP_income*(IP_income[int(HCUP_income)]/BaseLine_IP-1)
	HCUP_score = ED_HCUP_score + IP_HCUP_score


	return HCUP_score

