import {Cv} from '../database/db'

export const skill = {
    cvs: (skill, args, { db }) => {
        const cvs : Cv[] = []
        for (const element of db.cv_skill) {
            if (skill.id === element.idSkill) {
                cvs.push(db.cv.find((cv: any) => cv.id === element.idCv))
            }
        }
        return cvs
    }
}