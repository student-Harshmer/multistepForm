export interface UserInfoparams {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
};

export interface EducationInfoparams extends UserInfoparams {
  qualification: string[];
  experience: number;
  skills: string[];
}

export interface PreferencesInfoparams extends EducationInfoparams {
  portfolio: string;
  jobType: string;
  bio: string;
}