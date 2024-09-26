import './UserSearchResults.scss'
import LocationIcon from "../../../components/Icons/LocationIcon.tsx";
import WebsiteIcon from "../../../components/Icons/WebsiteIcon.tsx";
import TwitterIcon from "../../../components/Icons/TwitterIcon.tsx";
import CompanyIcon from "../../../components/Icons/CompanyIcon.tsx";

type UserSearchResultsProps = {
    user: User | null;
}

const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return 'Not Available'; // If no date is available

    const date = new Date(dateString);
    
    return `${date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })}`;
};

export default function UserSearchResults({user}: UserSearchResultsProps) {
    return (
        <section className="user-search-results">
            {user ? (
                <>
                    <img className="user-search-results__img" src={user.avatar_url ? user.avatar_url : ''}
                         alt="User avatar"/>

                    <div className="user-search-results__profile">
                        <h2 className="user-search-results__name">{user.name ? user.name : user.login}</h2>
                        <p className="user-search-results__login">@{user.login ? user.login : 'Not Available'}</p>
                        <p className="user-search-results__created">Joined {user.created_at ? formatDate(user.created_at) : 'Not Available'}</p>
                    </div>

                    <div className="user-search-results__details">
                        <p className="user-search-results__bio">{user.bio ? user.bio : 'This profile has no bio'}</p>

                        <div className="user-search-results__stats">
                            <div>
                                <h3 className="user-search-results__stat-header">Repos</h3>
                                <p className="user-search-results__stat-number">{user.public_repos ? user.public_repos : 0}</p>
                            </div>
                            <div>
                                <h3 className="user-search-results__stat-header">Followers</h3>
                                <p className="user-search-results__stat-number">{user.followers ? user.followers : 0}</p>
                            </div>
                            <div>
                                <h3 className="user-search-results__stat-header">Following</h3>
                                <p className="user-search-results__stat-number">{user.following ? user.following : 0}</p>
                            </div>
                        </div>

                        <div className="user-search-results__more-details">
                            <div className={user.location ? '' : 'user-search-results__more-details--absent'}>
                                <LocationIcon/>
                                <p>{user.location ? user.location : 'Not Available'}</p>
                            </div>
                            <div className={user.blog ? '' : 'user-search-results__more-details--absent'}>
                                <WebsiteIcon/>
                                <p>{user.blog ? user.blog : 'Not Available'}</p>
                            </div>
                            <div className={user.twitter_username ? '' : 'user-search-results__more-details--absent'}>
                                <TwitterIcon/>
                                <p>{user.twitter_username ? user.twitter_username : 'Not Available'}</p>
                            </div>
                            <div className={user.company ? '' : 'user-search-results__more-details--absent'}>
                                <CompanyIcon/>
                                <p>{user.company ? user.company : 'Not Available'}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    )
}