import friends from './json/friends.json'
import groups from './json/groups.json'
import profile from './json/profile.json'

export class DataSource {
    static getUserFriends(uid) {
        return {
            uid: uid,
            friends: friends[uid]
        }
    }

    static getUserGroups(uid) {
        return {
            uid: uid,
            groups: groups[uid]
        }
    }

    static getUserProfile (uid) {
        return profile[uid]
    }
}