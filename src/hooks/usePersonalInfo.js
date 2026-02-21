import { personalInfo as staticPersonalInfo } from '@/data/content';

/**
 * Returns static personal info directly — no API call needed.
 */
const usePersonalInfo = () => {
    return { info: staticPersonalInfo, loading: false, error: null };
};

export default usePersonalInfo;
