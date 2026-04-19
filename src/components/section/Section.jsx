import "./Section.css";
export function Section({ title, subtitle, children}){
    return(
        <div className="section-tenis">
            <div className="section-header">
                <h2>
                    {title}
                </h2>
                <p>
                    {subtitle && <p>{subtitle}</p>}
                </p>
            </div>
            <div className="section-content">
                {children}
            </div>
        </div>
    )
}