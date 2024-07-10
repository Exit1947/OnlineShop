package com.onlineShop.models.Feedback;

import com.onlineShop.models.Users.Person;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Feedback {
    @Id
    @NotBlank
    @Column(name = "id")
    private String id;

    @NonNull
    @ManyToOne(optional = false)
    @JoinColumn(name = "id_user")
    private Person person;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_parent_comment")
    private List<Feedback> subFeedbacks;

    @Column(name = "stars")
    @Min(value = 0, message = "Minimal count of stars is 0")
    @Max(value = 5, message = "Maximum count of stars is 5")
    private int stars;

    @NotBlank
    @Column(name = "main_text")
    @Length(min = 3, max = 250, message = "Main comment must be between 3 and 250 characters")
    private String mainText;

    @NotBlank
    @Column(name = "advantages")
    @Length(min = 3, max = 100, message = "Advantages comment must be between 3 and 100 characters")
    private String advantages;

    @NotBlank
    @Column(name = "disadvantages")
    @Length(min = 3, max = 100, message = "Disadvantages comment must be between 3 and 100 characters")
    private String disadvantages;

    @Min(value = 0)
    @Column(name = "likes")
    private int likes;

    @Min(value = 0)
    @Column(name = "dislikes")
    private int dislikes;

    @NonNull
    @Column(name = "date_publication")
    private Date datePublication;

}
