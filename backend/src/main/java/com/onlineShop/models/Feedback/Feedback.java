package com.onlineShop.models.Feedback;

import com.onlineShop.models.Users.UserEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

import java.util.ArrayList;
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
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_parent_comment")
    private Feedback parentComment;

    @OneToMany(mappedBy = "parentComment", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Feedback> childComments = new ArrayList<>();

    @Column(name = "stars")
    @Min(value = 0, message = "Minimal count of stars is 0")
    @Max(value = 5, message = "Maximum count of stars is 5")
    private byte stars;

    @NotBlank(message = "Main comment can't be empty")
    @Column(name = "main_text")
    @Length(min = 3, max = 250, message = "Main comment must be between 3 and 250 characters")
    private String mainText;

    @NotBlank(message = "Advantages comment can't be empty")
    @Column(name = "advantages")
    @Length(min = 3, max = 100, message = "Advantages comment must be between 3 and 100 characters")
    private String advantages;

    @NotBlank(message = "Disadvantages comment can't be empty")
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

    public boolean isRootComment() {
        return this.parentComment == null;
    }

}
